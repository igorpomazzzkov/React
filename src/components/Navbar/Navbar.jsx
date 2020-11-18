import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className={s.nav}>
        <NavLink className={s.link} activeClassName={s.active} to="/profile">Profile</NavLink>
        <NavLink className={s.link} activeClassName={s.active} to="/dialogs">Dialogs</NavLink>
        <NavLink className={s.link} activeClassName={s.active} to="/news">News</NavLink>
        <NavLink className={s.link} activeClassName={s.active} to="/music">Music</NavLink>
    </nav>
    )
}

export default Navbar;