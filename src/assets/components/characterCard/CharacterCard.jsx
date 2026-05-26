const CharacterCard = ({ img, name, status, species }) => {
    return (
        <div className="flex flex-col justify-center items-center flex-wrap gap-y-3 py-4 mb-4 mx-4 shadow-[0px_0px_15px_-1px_rgba(255,255,255,0.49)] rounded-[20px]">
            <div>
                <img src={img} alt={name} className="rounded-[50%] w-60" />
            </div>
            <div className="flex justify-center items-center flex-col gap-4 px-4">
                <h2 className="text-[25px]">{name}</h2>
                <h3 className="text-[20px]">Status: {status}</h3>
                <p className="text-[20px]">Specie:{species}</p>
            </div>
        </div>
    )
}

export default CharacterCard