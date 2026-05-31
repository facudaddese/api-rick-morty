import './Header.css'
import logoHeader from '../../../img/logo-header.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='grid px-7 items-center [grid-area:header] justify-between header-container'>
            <div className='w-50'>
                <Link to="/">
                    <img src={logoHeader} alt="Logo Rick And Morty" />
                </Link>
            </div>
            <div className='flex gap-10'>
                <Link to='/episode'>Episode</Link>
                <Link to='/location'>Location</Link>
            </div>
        </header>
    )
}

export default Header