import './Modal.module.css';

import styles from "./Modal.module.css"

import React from 'react'

import closeButton from "../../img/closeButton_ic.png";

const Modal = ({ children, description, onClick }) => {

	var descriptionArrayString = description.split("|");
	var projectTitle = descriptionArrayString.shift();
	var toolsUsed = descriptionArrayString.pop().split("$");

  return (
    <div className={styles.principal}>
		<div className={styles.contentSection}>
			<div className={styles.backgroundSection}>
				<div className={styles.demoSection}>
					{children}
					<button className={styles.closeButton} onClick={onClick}>
						<img src={closeButton}/>
					</button>
				</div>
			</div>
			<div className={styles.descriptionSection}>
				<h1>{projectTitle}</h1>
				<br/>
				{descriptionArrayString.map((part, index) => (
					<h2>{part}</h2>
				))}
				<br/>
				<h1>Ferramentas utilizadas</h1>
				<ul>
					{toolsUsed.map((part, index) => (
						<li>{part}</li>
					))}
				</ul>
			</div>
			
		</div>
      	
    </div>
  );
};

export default Modal;