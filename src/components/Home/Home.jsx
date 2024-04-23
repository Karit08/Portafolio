import React from 'react';
import Typed from 'typed.js';
import icons from '../../assets/habilidades';
import img1 from '../../assets/Karlacirculo.png';
import style from './Home.module.css';


const Home = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<i>Karla Jimenez</i>', 'Desarrolladora FullStack'],
            typeSpeed: 75,
            startDelay: 300,
            backSpeed: 75,
            loop: true,
            loopCount: false,
            showCursor: true,
            cursorChar: '|'
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);


    return (
        <div className={style.container}>
            {/* ---- left side ---- */}
            <div className={style.text}>
                <h1 > Hola! Soy <strong>Karla Jimenez</strong></h1>
                <p>Soy <span ref={el} /> </p>
                <p>
                    Soy Desarrollador Front-End, me encanta codear y crear proyectos
                    que sean funcional y visualmente atractivos.
                </p>
                <a
                    href="https://drive.google.com/file/d/1wAS-yzbx_n7ntQS4_R6nhHQ4T9A37qaA/view?usp=sharing"
                    target="_blank"
                >
                    DESCARGAR CV <img src={icons.download} width='30vph' />
                    {/* <i class="fa-solid fa-download"></i> */}
                </a>
                <div>
                    <ul className={style.links}>
                        {/* <!---- logo Github ----> */}
                        <li>
                            <img src={icons.github} width='40vph' />
                        </li>
                        <li>
                            <img src={icons.linkein} width='40vph' />
                        </li>
                        <li>
                            <img src={icons.gmail} width='40vph' />
                        </li>
                        <li>
                            <img src={icons.discord} width='40vph' />
                        </li>
                    </ul>
                </div>
            </div>
            {/* ---- right side ---- */}
            <div>
                <img src={img1} />
            </div>
        </div>
    )
}

export default Home;

// var typed = new Typed('.typed', {
//     strings: [
//         '<i class="mascota">Gato</i>',
//         '<i class="mascota">Perro</i>',
//         '<i class="mascota">Conejo</i>',
//         '<i class="mascota">Pez</i>',
//     ],
//     stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
//     typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
//     startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
//     backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
//     smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
//     shuffle: false, // Alterar el orden en el que escribe las palabras.
//     backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
//     loop: true, // Repetir el array de strings
//     loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
//     showCursor: true, // Mostrar cursor palpitanto
//     cursorChar: '|', // Caracter para el cursor
//     contentType: 'html', // 'html' o 'null' para texto sin formato
// });