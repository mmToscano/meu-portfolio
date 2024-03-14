import styles from "./Introduction.module.css"
import photo from "../../img/minha foto.jpeg"
import whatsappPhoto from "../../img/whatsapp.png"

function Introduction() {
    return (
        <div className={styles.introduction}>
            <div className={styles.infoArea}>
                <h1>Olá, eu sou o</h1>
                <h1>Matheus Toscano Moraes</h1>
                <h3>Programador júnior</h3>
                <div className={styles.buttonArea}>
                    <button>Download cv</button>
                    <div>
                        <h2>Entre em contato</h2> 
                        <img src={whatsappPhoto}/>
                    </div>
                </div>
            </div>
            <img src={photo}/>
            
            
        </div>
    );
}

export default Introduction;