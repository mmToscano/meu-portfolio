import styles from "./ProjectImgContainer.module.css"

function ProjectImgContainer({src}) {
    return(
        <div className={styles.principal}>
            <img src={src} alt="não deu"/>
        </div>
    )
}

export default ProjectImgContainer;