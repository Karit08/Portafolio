// import html5 from '../assets/html5.svg';
import skills from '../assets/habilidades';

const Skill = ()=>{
    return(
        <>
        <div>
            <h1>Habilidades <strong>.</strong></h1>
        </div>
        <div>
            <div>
                <img src={skills.html5}/>
                <p>HTML 5</p>
            </div>
            <div>
                <img src={skills.css3}/>
                <p>CSS 3</p>
            </div>
            <div>
                <img src={skills.js}/>
                <p>JavaScript</p>
            </div>
            <div>
                <img src={skills.rct}/>
                <p>React</p>
            </div>
            <div>
                <p>Redux</p>
            </div>
            <div>
                <p>Webpack</p>
            </div>
            <div>
                <img src={skills.gt}/>
                <p>Git</p>
            </div>
            <div>
                <img src={skills.github}/>
                <p>GitHub</p>
            </div>
            <div>
                <img src={skills.figma}/>
                <p>Figma</p>
            </div>
            <div>
                <img src={skills.npm}/>
                <p>Npm</p>
            </div>
            <div>
                <img src={skills.sass}/>
                <p>Sass</p>
            </div>
            <div>
                <img src={skills.bootstrap}/>
                <p>Bootstrap</p>
            </div>
            <div>
                <img src={skills.node}/>
                <p>Node</p>
            </div>
            <div>
                <p>Sequelize</p>
            </div>
            <div>
                <p>MongoDB</p>
            </div>
            <div>
                <img src={skills.aws}/>
                <p>AWS</p>
            </div>
        </div>
        </>
    )
};

export default Skill;
