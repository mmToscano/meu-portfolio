import styles from "./DemonstrationModal.module.css"
import React, { useState, useEffect } from 'react'

import leftArrow from "../../img/leftArrow.png"
import rightArrow from "../../img/rightArrow.png"

function DemonstrationModal({imgs}) {

    const [positionValue, setPositionValue] = useState(0);

    const toggleImgs = (event) => {

        var leftButton = document.getElementById("left");
        var rightButton = document.getElementById("right");
    
        if (event.target === leftButton) {
            if (!(positionValue === 0)) {
                setPositionValue(prevPosition => prevPosition - 1);
            }
        }
        
        if (event.target === rightButton) {
            if (!(positionValue === imgs.length - 1)) {
                setPositionValue(prevPosition => prevPosition + 1);
            }
        }
    };

    //[] executa no f5
    // vazio executa a cada renderização de qualquer coisa
    
    // Update the image source after the state has been updated

    useEffect(() => {
        var selectedDemoImage = document.getElementById("selectedModalDemoImage");
        selectedDemoImage.src = imgs[positionValue];
    }, [positionValue]);

    useEffect(() => {
        setPositionValue(0);
    },[imgs])

    return (
        <div className={styles.principal}>
            <button><img src={leftArrow} onClick={toggleImgs}  id="left"/></button>
            <img src={imgs[0]} className={styles.demo} id="selectedModalDemoImage" alt=""/>
            <button><img src={rightArrow} onClick={toggleImgs} id="right" alt=""/></button>
        </div>
    )
}

export default DemonstrationModal;