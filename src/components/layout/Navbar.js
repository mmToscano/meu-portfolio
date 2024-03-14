import styles from "./Navbar.module.css"
import photo from "../../img/setaDireita.png"

function Navbar() {
    return (
        <div className={styles.navbar}>
            <img src={photo}/>
            <h1>Portfólio</h1>
        </div>
    );
}

export default Navbar