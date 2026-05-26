import logoHeader from '../../../img/logo-header.png'
import Nav from '../nav/Nav'
import { useInput } from '../../hooks/useInput'
import './Header.css'

const Header = () => {

    const { input, handleInput } = useInput();

    return (
        <header className='grid px-7 items-center [grid-area:header] header-container'>
            <div className='w-70'>
                <img src={logoHeader} alt="Logo Rick and Morty" />
            </div>
            <Nav input={input} handleInput={handleInput}/>
        </header>
    )
}

export default Header