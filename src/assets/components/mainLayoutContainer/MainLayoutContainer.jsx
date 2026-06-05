import { useContext } from "react"
import Home from '../home/Home'
import { CharacterContext } from "../../context/CharacterContext"
import Button from '../button/Button'
import Nav from '../nav/Nav'

const MainLayoutContainer = () => {

    const { data, error, loading, input, handleInput, debounce, handlePrev, handleNext, filters, handleFilters, clearFilters } = useContext(CharacterContext);

    return (
        <>
            <Nav input={input} handleInput={handleInput} />
            <Home data={data} error={error} loading={loading} input={input} debounce={debounce} filters={filters} handleFilters={handleFilters} clearFilters={clearFilters} />
            <div className="flex items-center justify-center">
                <Button handle={handlePrev} label={"Prev"} type={data.info?.prev && !error} />
                <Button handle={handleNext} label={"Next"} type={data.info?.next && !error} />
            </div>
        </>
    )
}

export default MainLayoutContainer