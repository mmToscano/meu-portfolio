import styles from "./ImgContainer.module.css";

function ImgContainer({id, type, src, description, onMouseOver}) {
    return(
        <div className={styles.imgContainer} onMouseOver={onMouseOver}>
            <img src={src}/>
        </div>
    )
}

export default ImgContainer;