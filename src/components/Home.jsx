import icons from '../assets/habilidades';
import img1 from '../assets/Karlacirculo.png';

const Home = ()=>{
    return(
        <div>
            {/* ---- left side ---- */}
                <div>
                    <h1 > Hola! Soy <strong>Karla Jimenez</strong></h1>
                    <span> Desarrolladora FullStack</span>
                    <p>
                        Soy Desarrollador Front-End, me encanta codear y crear proyectos
                        que sean funcional y visualmente atractivos.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1wAS-yzbx_n7ntQS4_R6nhHQ4T9A37qaA/view?usp=sharing"
                        target="_blank"
                    >
                    DESCARGAR CV <img src={icons.download}/>
                    {/* <i class="fa-solid fa-download"></i> */}
                    </a>
                    <div>
                        <ul>
                        {/* <!---- logo Github ----> */}
                        <li>
                            <img src={icons.github}/> 
                        </li>
                        <li>
                            <img src={icons.linkein}/> 
                        </li>
                        <li>
                            <img src={icons.gmail}/> 
                        </li>
                        <li>
                            <img src={icons.discord}/> 
                        </li>
                        </ul>
                    </div> 
                </div>
            {/* ---- right side ---- */}
                <div>
                    <img src={img1}/>
                </div>
        </div>
    )
}

export default Home;
