import styles from "./Abilities.module.css"

import javaImg from "../../img/java.png";
import mySql from "../../img/mySql.png";

function Abilities() {
    return (
        <div className={styles.abilitiesSection}>
            <h1>Habilidades</h1>
            <div className={styles.infoArea}>
                <h2>*Passe o mouse por cima da linguagem
                    para saber minha experiência com ela.
                </h2>
                <div className={styles.languagesArea}>
                    <div className={styles.selectionArea}>
                        <h2 className={styles.chosen}>Back-end</h2>
                        <h2>Front-end</h2>
                    </div>
                    <div className={styles.iconsArea}>
                        <img src={javaImg}/>
                        <img src={mySql}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abilities