import ProjectImgContainer from "./ProjectImgContainer";
import styles from "./Projects.module.css";

import React, {useEffect} from 'react';

import projects from "../../fake_database/ProjectsList";

function Projects() {

    useEffect(() => {
        console.log(projects)
    }, [])

    return (
        <div className={styles.principal}>
            <h1>Projetos</h1>
            <div className={styles.infoArea}>
                <div className={styles.selectionArea}> 
                    <div className={styles.buttonArea}>
                        <h2>Back-end</h2>
                        <h2 className={styles.chosen}>Front-end</h2>
                    </div>
                    <div className={styles.imgArea}>
                        {projects.length > 0 &&
                        projects.map((proj) => (
                            <ProjectImgContainer src={proj.src}/>
                        ))}
                    </div>
                </div>
                <div className={styles.demonstrationArea}>
                    
                </div>
            </div>
        </div>
    )
}

export default Projects;