import img from '../assets/About2.png';

const About = ()=>{
    return(
        <>
            <div>
                <h1>Sobre mí <strong>.</strong> <i class="fa fa-user" aria-hidden="true"></i></h1>
            </div>
            <div>
                <div>
                    <h2>Karla Jimenez</h2>
                    <p>
                        Soy Entusiasta, estoy super motivada a aprender cada día más,
                        apasionado por este hermoso mundo de las IT, siempre dispuesto a
                        aprender nuevas tecnologias. 
                        Ahora quiero enfocar toda mi energía en convertirme en
                        Software Developer que es lo que realmente me apasiona.
                    </p>
                </div>
                <div>
                    <img src={img}/>
                </div>
            </div>

        </>
        
    )
}

export default About;
