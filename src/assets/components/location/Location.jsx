import { useState } from "react";
import { useAllPages } from "../../hooks/useAllPages";
import AsideLocation from "../asideLocation/AsideLocation"
import { useFetch } from "../../hooks/useFetch";
import CharacterCard from "../characterCard/CharacterCard";

const Location = () => {

    const { data: locations, error, loading } = useAllPages(`https://rickandmortyapi.com/api/location`);
    const [location, setLocation] = useState(null);
    const currentLocation = location || locations[0];
    const id = currentLocation?.residents.map(url => url.split("/").pop()).join(',');
    const { data: residents } = useFetch(`https://rickandmortyapi.com/api/character/${id}`);  

    if (error) return <p>{error}</p>
    if (loading) return <p>Loading locations...</p>

    return (
        <section className="grid [grid-template-areas:'aside_locations'] grid-cols-[250px_1fr] overflow-hidden h-147">
            <AsideLocation locations={locations} setLocation={setLocation} />
            <div className="[grid-area:locations]">
                <div className="flex flex-col items-center justify-center gap-3 pb-4">
                    <h1 className="text-center">Location: {currentLocation?.name}</h1>
                    <h2>Dimension: {currentLocation?.dimension}</h2>
                    <h2>Type: {currentLocation?.type}</h2>
                </div>
                <div className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] h-114 overflow-y-auto'>
                    {
                        Object.values(residents).map(character => (
                            <CharacterCard key={character.id} img={character.image} name={character.name} status={character.status} species={character.species} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Location