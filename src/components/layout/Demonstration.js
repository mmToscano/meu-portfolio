import styles from "./Demonstration.module.css";

import leftArrow from "../../img/leftArrow.png"
import rightArrow from "../../img/rightArrow.png"

function Demonstration({imgs}) {

    var initial = 0;
    var currentPosition = initial;


    const toggleImgs = (event) => {
        var selectedDemoImage = document.getElementById("selectedDemoImage");
        var leftButton = document.getElementById("left");
        var rightButton = document.getElementById("right");

        if(event.target == leftButton){
            currentPosition--;
            selectedDemoImage.src = imgs[currentPosition];
        }else{
            currentPosition++;
            selectedDemoImage.src = imgs[currentPosition];
        }

        console.log(currentPosition)


    }

    return (
        <div className={styles.principal}>
            <div className={styles.toggleArea}>
                <button onClick={toggleImgs} id="left"><img src={leftArrow}/></button>
                <img src={imgs[0]} id="selectedDemoImage"/>
                <button onClick={toggleImgs} id="right"><img src={rightArrow}/></button>

            </div>
            <h2>
               *descrição do projeto e minha experiência com ele 
            </h2>
        </div>
        
    )
}

export default Demonstration;