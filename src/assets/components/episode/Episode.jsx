import { useState } from 'react';
import { useAllPages } from '../../hooks/useAllPages'
import AsideEpisode from "../asideEpisode/AsideEpisode";
import { useFetch } from '../../hooks/useFetch'
import CharacterCard from '../characterCard/CharacterCard';

const Episode = () => {

    const { data: episodes, error, loading } = useAllPages(`https://rickandmortyapi.com/api/episode`);
    const [episode, setEpisode] = useState(null);
    const currentEpisode = episode || episodes[0];
    const id = currentEpisode?.characters.map(url => url.split("/").pop()).join(',');
    const { data: character } = useFetch(`https://rickandmortyapi.com/api/character/${id}`);

    if (error) return <p>{error}</p>
    if (loading) return <p>Loading episodes...</p>

    return (
        <section className="grid [grid-template-areas:'aside_episodes'] grid-cols-[250px_1fr] overflow-hidden h-147">
            <AsideEpisode episodes={episodes} setEpisode={setEpisode} />
            <div className="[grid-area:episodes]">
                <div className="flex flex-col items-center justify-center gap-3 pb-4">
                    <h1 className="text-center">Episode name: {currentEpisode?.name}</h1>
                    <strong>Air date:{currentEpisode?.air_date}</strong>
                </div>
                <div className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] h-114 overflow-y-auto'>
                    {
                        Object.values(character).map(c => (<CharacterCard key={c.id} img={c.image} name={c.name} status={c.status} species={c.species} />))
                    }
                </div>
            </div>
        </section>
    )
}

export default Episode