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
    const { data, error } = useFetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const { data: dataSearch, error: errorSearch } = useFetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${debounce}`);
    const { filters, handleFilters, clearFilters } = useFilter(setPage, { status: '', species: '', gender: '' });
    const { status, species, gender } = filters;
    const hasFilter = !!(status || species || gender);
    const { data: dataFilter } = useFetch(`https://rickandmortyapi.com/api/character?page=${page}&status=${status}&species=${species}&gender=${gender}`);
    return (
        <CharacterContext.Provider value={{ data, error, handlePrev, handleNext, dataSearch, errorSearch, input, handleInput, debounce, dataFilter, filters, handleFilters, hasFilter, clearFilters }}>{children}</CharacterContext.Provider>
    )
}
