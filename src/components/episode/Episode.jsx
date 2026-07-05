import { useState } from 'react';
import {useAllPages} from '../../hooks/useAllPages'
import AsideEpisode from "../asideEpisode/AsideEpisode";
import { useFetch } from '../../hooks/useFetch'
import CharacterCard from '../characterCard/CharacterCard';
import './Episode.css'

const Episode = () => {

    const { data: episodes, error, loading } = useAllPages(`https://rickandmortyapi.com/api/episode`);
    const [episode, setEpisode] = useState(null);
    const currentEpisode = episode || episodes[0];
    const id = currentEpisode?.characters.map(url => url.split("/").pop()).join(',');
    const { data: character } = useFetch(id ? `https://rickandmortyapi.com/api/character/${id}` : null);

    if (error) return <p>{error}</p>
    if (loading) return <p>Loading episodes...</p>

    return (
        <section className="grid grid-cols-[250px_1fr] h-full overflow-hidden section-episode">
            <AsideEpisode episodes={episodes} setEpisode={setEpisode} />
            <div className="[grid-area:episodes] py-3 info-episode">
                <div className="flex flex-col items-center justify-center gap-3 pb-4 info-container">
                    <h1 className="text-center"><span className='underline'>Episode</span>: {currentEpisode?.name}</h1>
                    <h2><span className='underline'>Air date</span>: {currentEpisode?.air_date}</h2>
                </div>
                <div className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] h-170 overflow-y-auto overflow-x-hidden home-episode'>
                    {
                        Object.values(character).map(c => (<CharacterCard key={c.id} img={c.image} name={c.name} status={c.status} species={c.species} />))
                    }
                </div>
            </div>
        </section>
    )
}

export default Episode