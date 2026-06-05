import './Home.css'
import CharacterCard from "../characterCard/CharacterCard";
import Aside from '../aside/Aside';

const Home = ({ data, error, loading, input, debounce, filters, handleFilters, clearFilters }) => {

    if(loading)return <p className='flex h-100 items-center justify-center'>Loading characters...</p>

    return (
        <section className="grid [grid-template-areas:'aside_layout'] items-center grid-cols-[250px_1fr] overflow-hidden">
            <Aside filters={filters} handleFilters={handleFilters} clearFilters={clearFilters} />
            {
                !error ?
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] h-114 overflow-y-auto py-1">
                        {
                            input ?
                                data.results?.filter(character => character.name.toLowerCase().includes(debounce.trim().toLowerCase())).map(item => (<CharacterCard key={item.id} img={item.image} name={item.name} status={item.status} species={item.species} />))
                                :
                                data.results?.map(character => (<CharacterCard key={character.id} img={character.image} name={character.name} status={character.status} species={character.species} />))
                        }
                    </div>
                    :
                    <p className='mx-auto text-[20px]'>{error}</p>
            }
        </section>
    )
}

export default Home