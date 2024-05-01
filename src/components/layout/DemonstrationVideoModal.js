import styles from "./DemonstrationVideoModal.module.css"


function DemonstrationVideoModal({video}) {
    
    return(
        <div className={styles.principal}>
            <video controls>
                <source src={video} type="video/mp4" /> {/* specify the video file */}
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default DemonstrationVideoModal;