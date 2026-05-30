import { useState } from 'react'

export const useFilter = () => {

    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');

    return { status, species, gender, setStatus, setSpecies, setGender }
}