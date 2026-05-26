import { useContext } from "react"
import { CharacterContext } from '../../context/CharacterContext'
import './MainLayout.css'
import Button from "../button/Button";
import CharacterCard from "../characterCard/CharacterCard";

const MainLayout = () => {

    const { data, handlePrev, handleNext } = useContext(CharacterContext);

    return (
        <section className="[grid-area:layout] grid character-grid py-1">
            <Button handle={handlePrev} label={"Anterior"} type={data.info?.prev} />
            <Button handle={handleNext} label={"Siguiente"} type={data.info?.next} />
            {
                data.results?.map(character => (<CharacterCard key={character.id} img={character.image} name={character.name} status={character.status} species={character.species} />))
            }
            <Button handle={handlePrev} label={"Anterior"} type={data.info?.prev} />
            <Button handle={handleNext} label={"Siguiente"} type={data.info?.next} />
        </section>
    )
}

export default MainLayout