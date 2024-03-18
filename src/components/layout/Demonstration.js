import styles from "./Demonstration.module.css";

import leftArrow from "../../img/leftArrow.png"
import rightArrow from "../../img/rightArrow.png"

import React, {useEffect, useState} from 'react'

function Demonstration({name, description, imgs}) {

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
        var selectedDemoImage = document.getElementById("selectedDemoImage");
        selectedDemoImage.src = imgs[positionValue];
    }, [positionValue]);

    useEffect(() => {
        setPositionValue(0);
    },[imgs])

    return (
        <div className={styles.principal}>
            <h2>{name}</h2>
            <div className={styles.toggleArea}>
                <button ><img src={leftArrow} onClick={toggleImgs}  id="left"/></button>

                {imgs.length > 0 ? (
                    <img src={imgs[0]} id="selectedDemoImage"/>                    
                    ) : (
                        <img src={imgs} id="selectedDemoImage"/>
                )}
                
                <button ><img src={rightArrow} onClick={toggleImgs} id="right"/></button>

            </div>
            <h2 className={styles.description}>
               {description}
            </h2>
        </div>
        
    )
}

export default Demonstration;