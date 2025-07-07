import { NavLink } from 'react-router-dom';
import './MainPage.css';
import logo from './assets/logo.png';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-inner">
        <NavLink to="/" end>
          <img src={logo} alt="Logo" className="logo-img" />
        </NavLink>
        <nav className="main-nav center-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
} 