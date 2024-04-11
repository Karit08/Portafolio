import { NavLink } from "react-router-dom";
// import logo from '../assets/iconK.png';
import icons from '../assets/habilidades';

const NavBar = ()=>{
    return(
        <>
        <ul>
            <li><NavLink to='/'> <img src={icons.k} width='40px'/></NavLink>Karla Jimenez</li>
            <li><NavLink to='/About'>Sobre mí</NavLink></li>
            <li><NavLink to='/Skill'>Habilidades</NavLink></li>
            <li><NavLink to='/Vocational'>Formación</NavLink></li>
            <li><NavLink to='/Projects'>Proyectos</NavLink></li> 
            <li><NavLink to='/Contact'>Contacto</NavLink></li>
        </ul>
        </>
    )
};

export default NavBar;
