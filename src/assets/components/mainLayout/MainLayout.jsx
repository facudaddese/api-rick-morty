import './MainLayout.css'
import CharacterCard from "../characterCard/CharacterCard";
import Aside from '../aside/Aside';

const MainLayout = ({ data, dataSearch, input, dataFilter, errorFilter }) => {
    return (
        <section className='grid [grid-area:layout] overflow-hidden section-container'>
            <Aside dataFilter={dataFilter} errorFilter={errorFilter} />
            <div className="[grid-area:layout] h-100 overflow-y-auto grid character-grid py-1">
                {
                    input
                        ?
                        dataSearch.results?.slice(0, 6).filter(character => character.name.toLowerCase().includes(input.trim().toLowerCase())).map(item => (
                            <CharacterCard key={item.id} img={item.image} name={item.name} status={item.status} species={item.species} />
                        ))
                        // :
                        // dataFilter.results?.length > 0 ?
                        //     dataFilter.results?.map(item => (
                        //         <CharacterCard key={item.id} img={item.image} name={item.name} status={item.status} species={item.species} />
                        //     ))
                        :
                        data.results?.slice(0, 6).map(character => (<CharacterCard key={character.id} img={character.image} name={character.name} status={character.status} species={character.species} />))
                }
            </div>
        </section>
    )
}

export default MainLayout