import { useState } from 'react'

export const useFilter = (setPage, initialState = {}) => {

    const [filters, setFilters] = useState(initialState);

    const handleFilters = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
        setPage(1);
    }

    const clearFilters = () => setFilters(initialState);

    return { filters, handleFilters, clearFilters }
}