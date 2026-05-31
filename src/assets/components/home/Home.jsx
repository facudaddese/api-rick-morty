import './Home.css'
import CharacterCard from "../characterCard/CharacterCard";
import Aside from '../aside/Aside';

const Home = ({ data, error, loading, input, debounce, filters, handleFilters, clearFilters }) => {

    if (loading) return <p>Loading characteres...</p>

    return (
        <section className="grid [grid-template-areas:'aside_layout'] grid-cols-[250px_1fr] overflow-hidden">
            <Aside filters={filters} handleFilters={handleFilters} clearFilters={clearFilters} />
            {
                !error ?
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] h-115 overflow-y-auto py-1">
                        {
                            input ?
                                data.results?.slice(0, 6).filter(character => character.name.toLowerCase().includes(debounce.trim().toLowerCase())).map(item => (<CharacterCard key={item.id} img={item.image} name={item.name} status={item.status} species={item.species} />))
                                :
                                data.results?.slice(0, 6).map(character => (<CharacterCard key={character.id} img={character.image} name={character.name} status={character.status} species={character.species} />))
                        }
                    </div>
                    :
                    <p className='text-center text-[20px]'>{error}</p>
            }
        </section>
    )
}

export default Home