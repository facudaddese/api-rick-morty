import { CharacterContext } from '../../context/CharacterContext'
import { useFetch } from '../../hooks/useFetch'

export const CharacterProvider = ({ children }) => {

    const { data, error, loading, handlePrev, handleNext } = useFetch('https://rickandmortyapi.com/api/character');

    return (
        <CharacterContext.Provider value={{data, error, loading, handlePrev, handleNext}}>{children}</CharacterContext.Provider>
    )
}
