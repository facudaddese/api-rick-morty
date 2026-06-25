import { useState } from 'react'

export const useInput = (setPage) => {

    const [input, setInput] = useState("");

    const handleInput = ({ target }) => {
        setInput(target.value);
        setPage(1);
    }

    return { input, handleInput }
}
