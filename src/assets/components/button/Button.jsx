const Button = ({ handle, label, type }) => {
    return (
        <div className="text-center py-1 w-150">
            <button disabled={!type} onClick={handle} className={`${type ? 'normal' : 'opacity-40'} ${type ? "cursor-pointer" : "cursor-none"} shadow-[0px_0px_15px_-1px_rgba(255,255,255,0.49)] rounded-[20px] w-[50%] py-4 my-3 hover:shadow-[0px_0px_20px_-1px_rgba(255,255,255,0.49)]`}>{label}</button>
        </div>
    )
}

export default Button