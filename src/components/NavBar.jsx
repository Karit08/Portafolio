// import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ()=>{
    return(
        <>
        <ul>
            <li>Karla Jimenez</li>
            <li><NavLink to='/'>Sobre mí</NavLink></li>
            <li><NavLink to='/Skill'>Habilidades</NavLink></li>
            <li><NavLink to='/Vocational'>Formación</NavLink></li>
            <li><NavLink to='/Projects'>Proyectos</NavLink></li>
            <li><NavLink to='/Contact'>Contacto</NavLink></li>
        </ul>
        </>
    )
};

export default NavBar;
