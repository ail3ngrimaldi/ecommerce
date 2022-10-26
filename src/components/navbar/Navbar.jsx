import { NavLink } from 'react-router-dom';

import './Navbar.scss';
// import Button from './Button';
import { Bars } from './Icons';
import NavbarLogo from './NavbarLogo';

const Navbar = ( {toggle} ) => {

    return (
    <header>
      <nav className="navbar">
        <div className='navbar-logo'>
          <NavbarLogo/>
        </div>
        <Bars onClick={toggle}/>
        <ul className="navbar-menu">
            <li>
              <NavLink to='/shop' className='navbar-menu-item'>SHOP</NavLink>
            </li>
            <li>
              <NavLink to='/sobre-nosotros' className='navbar-menu-item'>Sobre nosotros</NavLink>
            </li>
            <li>
              <NavLink to='/contacto' className='navbar-menu-item'>Contacto</NavLink>
            </li>
        </ul>
      </nav>
    </header>
    );
  }
  
  export default Navbar;
  