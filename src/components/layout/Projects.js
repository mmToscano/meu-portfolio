import ProjectImgContainer from "./ProjectImgContainer";
import styles from "./Projects.module.css";

import React, {useState, useEffect} from 'react';

import projects from "../../fake_database/ProjectsList";

function Projects() {

    const [showFront, setShowFront] = useState(true);
    const [showBack, setShowBack] = useState(false);
    const [chosenElement, setChosenElement] = useState(null);

   const mudarSelecao = (event) => {
    var clickedElement = event.target;

    if(!(clickedElement == chosenElement)){
        clickedElement.classList.add(styles.chosen);
    chosenElement.classList.remove(styles.chosen);

    setChosenElement(clickedElement);
    
    setShowBack(!showBack);
    setShowFront(!showFront);
    }

   }

    useEffect(() => {
        setChosenElement(document.getElementById("chosen")); //coloca o front como selected
    }, [])

    return (
        <div id="projects" className={styles.principal}>
            <h1>Projetos</h1>
            <div className={styles.infoArea}>
                <div className={styles.selectionArea}> 
                    <div className={styles.buttonArea}>
                        <h2 onClick={mudarSelecao}>Back-end</h2>
                        <h2 onClick={mudarSelecao} className={styles.chosen} id="chosen">Front-end</h2>
                    </div>
                    <div className={styles.imgArea}>
                        {projects.length > 0 && showFront &&
                        projects.filter((project => project.type == "Front-end")).map((proj) => (
                            <ProjectImgContainer src={proj.src}/>
                        ))}
                        {projects.length > 0 && showBack &&
                        projects.filter((project => project.type == "Back-end")).map((proj) => (
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