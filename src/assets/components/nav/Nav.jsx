const Nav = ({ input, handleInput }) => {
    return (
        <nav>
            <input value={input} onChange={handleInput} type="text" placeholder="Busque su personaje..." className="bg-transparent border-0 outline-0 border-b-2 border-b-[#393939] w-100 placeholder:text-center text-center text-[18px] font-bold" />
        </nav>
    )
}

export default Nav