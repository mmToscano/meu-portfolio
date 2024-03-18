import styles from "./ProjectImgContainer.module.css"

function ProjectImgContainer({src, onClick}) {
    return(
        <div className={styles.principal} onClick={onClick}>
            <img src={src}/>
        </div>
    )
}

export default ProjectImgContainer;