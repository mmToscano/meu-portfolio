import React, {useEffect, useState} from 'react';

import styles from "./Abilities.module.css"

import abilitiesList from "../../fake_database/AbilitiesList"
import ImgContainer from '../layout/ImgContainer';

function Abilities() {

    const [infoDisplayed, setInfoDisplayed] = useState("*Passe o mouse por cima da linguagem para saber minha experiência com ela.");
    const [showBack, setShowBack] = useState(true);
    const [showFront, setShowFront] = useState(false);
    const [selectedElement, setSelectedElement] = useState(null);

    useEffect(() => {
        // Find the default element when the component mounts
        const defaultElement = document.getElementById('selected');
    
        if (defaultElement) {
          setSelectedElement(defaultElement);
        }
      }, []);

    const mudarSelecao = (event) => {
        if(!(event.target == selectedElement)){
            var clickedElement = event.target;

    
            selectedElement.classList.remove(styles.chosen)
            clickedElement.classList.add(styles.chosen);
            setSelectedElement(clickedElement)
            
    
    
            setShowBack(!showBack);
            setShowFront(!showFront);
        }
    }


    function mostrarInfo(id) {
        var item;

        for (let index = 0; index < abilitiesList.length; index++) {
            if(index == id){
                item = abilitiesList[id];
                break;
            }
        }

        setInfoDisplayed(item.description)
    }



    return (
        <div className={styles.abilitiesSection}>
            <h1>Habilidades</h1>
            <div className={styles.infoArea}>
                <h2>"{infoDisplayed}"</h2>
                <div className={styles.languagesArea}>
                    <div className={styles.selectionArea}>
                        <h2 id="selected" className={styles.chosen} onClick={mudarSelecao}>Back-end</h2>
                        <h2 onClick={mudarSelecao}>Front-end</h2>
                    </div>
                    <div className={styles.iconsArea}>
                        {abilitiesList.length > 0 && showBack &&
                        abilitiesList.filter((abi => abi.type == "Back-end")).map((abi)=> (
                            <ImgContainer 
                                id={abi.id}
                                type={abi.type}
                                src={abi.src}
                                description={abi.description}
                                onMouseOver={() => {mostrarInfo(abi.id)}}
                            />
                        ))}
                        {abilitiesList.length > 0 && showFront &&
                        abilitiesList.filter((abi => abi.type == "Front-end")).map((abi)=> (
                            <ImgContainer 
                                id={abi.id}
                                type={abi.type}
                                src={abi.src}
                                description={abi.description}
                                onMouseOver={() => {mostrarInfo(abi.id)}}
                            />
                        ))}
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Abilities