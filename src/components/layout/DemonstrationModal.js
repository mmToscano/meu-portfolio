import styles from "./DemonstrationModal.module.css"

import leftArrow from "../../img/leftArrow.png"
import rightArrow from "../../img/rightArrow.png"
import demo from "../../img/imagemIlustrativa.png"

function DemonstrationModal({imgs}) {
    return (
        <div className={styles.principal}>
            <img src={leftArrow}/>
            <img src={imgs[0]} className={styles.demo}/>
            <img src={rightArrow}/>
        </div>
    )
}

export default DemonstrationModal;