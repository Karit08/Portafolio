import icons from '../../assets/habilidades';
import img1 from '../../assets/Karlacirculo.png';
import style from './Home.module.css';

const Home = ()=>{
    return(
        <div className={style.container}>
            {/* ---- left side ---- */}
                <div className={style.text}>
                    <h1 > Hola! Soy <strong>Karla Jimenez</strong></h1>
                    <span className={style.maquina}> Desarrolladora FullStack</span>
                    <p>
                        Soy Desarrollador Front-End, me encanta codear y crear proyectos
                        que sean funcional y visualmente atractivos.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1wAS-yzbx_n7ntQS4_R6nhHQ4T9A37qaA/view?usp=sharing"
                        target="_blank"
                    >
                    DESCARGAR CV <img src={icons.download} width='30vph'/>
                    {/* <i class="fa-solid fa-download"></i> */}
                    </a>
                    <div>
                        <ul className={style.links}>
                        {/* <!---- logo Github ----> */}
                        <li>
                            <img src={icons.github} width='40vph'/> 
                        </li>
                        <li>
                            <img src={icons.linkein} width='40vph'/> 
                        </li>
                        <li>
                            <img src={icons.gmail} width='40vph'/> 
                        </li>
                        <li>
                            <img src={icons.discord} width='40vph'/> 
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
