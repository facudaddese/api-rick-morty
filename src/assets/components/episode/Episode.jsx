import { useFetch } from "../../hooks/useFetch"
import { usePage } from "../../hooks/usePage";
// import Aside from "../aside/Aside";

const Episode = () => {

    const { page } = usePage();
    const { data, error, loading } = useFetch(`https://rickandmortyapi.com/api/episode?page=${page}`);

    if (loading) return <p>Loading episodes...</p>
    if (error) return <p>{error}</p>

    return (
        <section className="grid [grid-template-areas:'aside_layout'] grid-cols-[250px_1fr] overflow-hidden">
            <aside className="[grid-area:aside] px-5 flex flex-col items-center justify-around h-95 overflow-hidden overflow-y-auto gap-4 py-4 w-65">Episode</aside>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] h-146 overflow-y-auto py-1">
                {
                    data.results?.map(ep => (
                        <div key={ep.id} className="flex flex-col items-center">
                            <h1 className="text-center py-4">Episode name: {ep.name}</h1>
                            <strong>Air date:{ep.air_date}</strong>
                            <div>
                                {console.log(ep.characters)
                                }    
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Episode