import { NavLink } from "react-router-dom";
// import logo from '../assets/iconK.png';
import style from './NavBar.module.css';
import icons from '../../assets/habilidades';

const NavBar = () => {
    return (
        <div className={style.header}>
            <div>
                <NavLink to='/'><img src={icons.k} width='40vph'/></NavLink>
            </div>
            <ul className={style.nav_menu}>
                <li><NavLink to='/About'>Sobre mí</NavLink></li>
                <li><NavLink to='/Skill'>Habilidades</NavLink></li>
                <li><NavLink to='/Vocational'>Formación</NavLink></li>
                <li><NavLink to='/Projects'>Proyectos</NavLink></li>
                <li><NavLink to='/Contact'>Contacto</NavLink></li>
            </ul>
            <div className={style.nav_rigth}>
                <img src={icons.github} alt="GitHub" width='30vph' />
                <img src={icons.linkein} alt="LinkedIn" width='30vph' />
            </div>
        </ div>
    )
};

export default NavBar;
