const CharacterCard = ({ img, name, status, species }) => {
    return (
        <div className="flex flex-col justify-around items-center flex-wrap gap-y-2 py-4 mb-5 mx-5 h-110 shadow-[0px_0px_15px_-1px_rgba(255,255,255,0.49)] rounded-[20px]">
            <div>
                <img src={img} alt={name} className="rounded-[50%] w-55" />
            </div>
            <div className="flex flex-1 justify-around items-center flex-col px-4">
                <h2 className="text-[25px] text-center">{name}</h2>
                <h3 className="text-[20px] text-center">Status: {status}</h3>
                <p className="text-[20px] text-center">Specie:{species}</p>
            </div>
        </div>
    )
}

export default CharacterCard