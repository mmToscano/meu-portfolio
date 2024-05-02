import styles from "./ProjectImgContainer.module.css"

function ProjectImgContainer({src, onClick}) {
    return(
        <div className={styles.principal} onClick={onClick}>
            <img src={src} alt=""/>
        </div>
    )
}

export default ProjectImgContainer;