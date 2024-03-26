import styles from "./AboutMe.module.css";
import text from "../../texts/AboutMeText.js";
import ButtonDefault from "../layout/ButtonDefault.js";

import imgGithub from "../../img/Github.png";
import imgLinkedin from "../../img/Linkedin.png";
import imgMail from "../../img/carta.png";
import imgPhone from "../../img/telefone.png";

function AboutMe () {
    return (
        <div className={styles.aboutMe}>
            <div className={styles.textArea}>
                <h1>Sobre mim</h1>
                <h2>Meu nome é <b>Matheus Toscano Moraes. </b>{text[0]}</h2>
                <br></br>
                <h2>{text[1]}</h2>
            </div>
            <div className={styles.buttonArea}>
                <ButtonDefault link="mailto: m.moraes11@outlook.com"  description="Email" info="m.moraes11@outlook.com" Img={imgMail}/>
                <ButtonDefault link="https://wa.me/5534999619084" description="Telefone" info="(34) 9 9961-9084" Img={imgPhone} target="_blank"/>
                <ButtonDefault link="https://www.linkedin.com/in/matheus-toscano-3815251a4/" description="Linkedin" info="@matheus-toscano" Img={imgLinkedin} target="_blank"/>
                <ButtonDefault link="https://github.com/mmToscano" description="Github" info="@mmToscano" Img={imgGithub} target="_blank" rel="noopener noreferrer"/>
            </div>
        </div>
        
    );
}

export default AboutMe