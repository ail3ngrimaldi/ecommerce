import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { Search, Cart } from './Icons';


const Logo = () => {

    return (
        <>
            <li className='list__logo'>
              <NavLink to='/' className='logo' >LOCAS x LA ROPA</NavLink>
            </li>
        </>
    )
}

const SearchBar = () => {

    return (
        <>
            <div className='container__searchbar'>
             <input className='input__searchbar'/>
                <i>
                    <Search/>
                </i>
            </div>
        </>
    )
}

const NavbarLogo = () => {

    return (
        <>
            <header>
                <nav className='navbar__logo'>
                    <Logo/>
                    <SearchBar />
                    <NavLink to='/checkout'>
                        <Cart/>
                    </NavLink>
                </nav>
            </header>
        </>
    )
}

export default NavbarLogo;