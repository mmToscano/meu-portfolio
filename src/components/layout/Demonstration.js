import styles from "./Demonstration.module.css";

import leftArrow from "../../img/leftArrow.png"
import rightArrow from "../../img/rightArrow.png"
import githubImg from "../../img/githubImg2.png"
import fullscreen from "../../img/fullscreen.png"

import React, {useEffect, useState} from 'react'

function Demonstration({name, description, showModal, imgs, imgsForModal}) {
    

    const [positionValue, setPositionValue] = useState(0);
    const [showInnerButton, setShowInnerButton] = useState(false);

    function showModalAndChangeImgState() {
        showModal();
        imgsForModal();
    }

    function toggleInnerButton() {
        setShowInnerButton(!showInnerButton);
        var imgElement = document.getElementById("selectedDemoImage");
        if(imgElement.style.filter == "brightness(0.5)"){
            imgElement.style.filter = "brightness(1.0)";
        }else{
            imgElement.style.filter = "brightness(0.5)";
        }
        
    }


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

    function openNewTab(url) {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }

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
            <div className={styles.infoArea}>
                <a href="#" onClick={() => openNewTab("https://github.com/mmToscano/" + name)} className={styles.gitImg}>
                    <img src={githubImg} alt=""/>
                    <h3>checar repositório</h3>
                </a>
                <h2>{name}</h2>
                <div></div>
            </div>
            <div className={styles.toggleArea}>
                <button ><img src={leftArrow} onClick={toggleImgs}  id="left" alt=""/></button>
                <div className={styles.wrapper} onMouseEnter={toggleInnerButton} onMouseLeave={toggleInnerButton}>
                    <img onClick={showModalAndChangeImgState} src={imgs[0]} id="selectedDemoImage" alt=""/> 
                    {showInnerButton &&
                        <img onClick={showModalAndChangeImgState} className={styles.innerButton} src={fullscreen} alt=""/>
                    }
                </div>
                <button ><img src={rightArrow} onClick={toggleImgs} id="right" alt=""/></button>
            </div>
        </div>
        
    )
}

export default Demonstration;