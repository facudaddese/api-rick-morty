import { CharacterContext } from '../../context/CharacterContext'
import { useInput } from '../../hooks/useInput';
import { useDebounce } from '../../hooks/useDebounce';
import { useFetch } from '../../hooks/useFetch';
import { useFilter } from '../../hooks/useFilter';
import { usePage } from '../../hooks/usePage'

export const CharacterProvider = ({ children }) => {

    const { page, handlePrev, handleNext, setPage } = usePage();
    const { input, handleInput } = useInput(setPage);
    const { debounce } = useDebounce(input);
    const { filters, handleFilters, clearFilters } = useFilter(setPage, { status: '', species: '', gender: '' });
    const { status, species, gender } = filters;

    const params = new URLSearchParams();
    params.set('page', page);
    if (debounce.trim()) params.set('name', debounce.trim());
    if (status) params.set('status', status);
    if (species) params.set('species', species);
    if (gender) params.set('gender', gender);

    const { data, error, loading } = useFetch(`https://rickandmortyapi.com/api/character?${params.toString()}`);

    return (
        <CharacterContext.Provider value={{ data, error, loading, handlePrev, handleNext, input, handleInput, debounce, filters, handleFilters, clearFilters }}>{children}</CharacterContext.Provider>
    )
}
