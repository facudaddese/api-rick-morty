const Nav = ({ input, handleInput }) => {
    return (
        <nav className="[grid-area:nav] flex justify-center pb-4">
            <input value={input} onChange={handleInput} type="text" placeholder="Search characters..." className="border-0 outline-0 border-b-2 border-b-[#393939] w-100 placeholder:text-center text-center text-[18px] font-bold" />
        </nav>
    )
}

export default Nav