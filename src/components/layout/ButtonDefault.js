import styles from "./ButtonDefault.module.css"

function ButtonDefault({description, info, Img}) {
    return (
        <div className={styles.buttonPrincipal}>
            <button><img src={Img}/></button>
            <h1>{description}</h1>
            <h1>{info}</h1>
        </div>
    )
}

export default ButtonDefault