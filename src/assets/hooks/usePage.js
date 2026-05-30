import { useState } from 'react'

export const usePage = () => {

    const [page, setPage] = useState(1);

    const handlePrev = () => setPage(prev => prev - 1);
    const handleNext = () => setPage(prev => prev + 1);

    return { page, handlePrev, handleNext, setPage }
}
