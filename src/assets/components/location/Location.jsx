import { useAllPages } from "../../hooks/useAllPages";
import AsideLocation from "../asideLocation/AsideLocation"

const Location = () => {

    const { data, error, loading } = useAllPages(`https://rickandmortyapi.com/api/location`);

    if (error) return <p>{error}</p>
    if (loading) return <p>Loading locations...</p>

    return (
        <section className="grid [grid-template-areas:'aside_locations'] grid-cols-[250px_1fr] overflow-hidden h-145 pt-10 episode-container">
            <AsideLocation locations={data} />
            <div className="[grid-area:locations] overflow-y-auto py-1">

            </div>
        </section>
    )
}

export default Location