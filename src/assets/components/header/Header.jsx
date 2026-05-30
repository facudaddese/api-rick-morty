import './Header.css'
import Nav from '../nav/Nav'
import logoHeader from '../../../img/logo-header.png'
import { useContext } from 'react'
import { CharacterContext } from '../../context/CharacterContext'

const Header = () => {

    const { input, handleInput } = useContext(CharacterContext);

    return (
        <header className='grid px-7 items-center [grid-area:header] header-container'>
            <div className='w-70'>
                <img src={logoHeader} alt="Logo Rick And Morty" />
            </div>
            <Nav input={input} handleInput={handleInput} />
        </header>
    )
}

export default Header