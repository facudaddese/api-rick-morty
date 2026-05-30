import { useContext } from "react"
import MainLayout from "../mainLayout/MainLayout"
import './MainContainer.css'
import { CharacterContext } from "../../context/CharacterContext"
import Button from '../button/Button'

const MainLayoutContainer = () => {

    const { data, error, input, debounce, handlePrev, handleNext, dataSearch, dataFilter, filters, handleFilters, hasFilter, clearFilters } = useContext(CharacterContext);

    return (
        <main className="grid [grid-area:main] min-w-384  main-container">
            {
                !error ?
                    <div className='[grid-area:btns] flex max-w-full justify-center items-center'>
                        <Button handle={handlePrev} label={"Anterior"} type={input ? dataSearch.info?.prev : hasFilter ? dataFilter.info?.prev : data.info?.prev} />
                        <Button handle={handleNext} label={"Siguiente"} type={input ? dataSearch.info?.next : hasFilter ? dataFilter.info?.next : data.info?.next} />
                    </div>
                    :
                    <p className="flex items-center justify-center min-w-screen">Error al consumir la Base de Datos</p>
            }
            {
                !error && <MainLayout data={data} dataSearch={dataSearch} input={input} debounce={debounce} dataFilter={dataFilter} filters={filters} handleFilters={handleFilters} hasFilter={hasFilter} clearFilters={clearFilters} />
            }
        </main>
    )
}

export default MainLayoutContainer