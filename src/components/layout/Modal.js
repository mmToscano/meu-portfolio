import './Modal.module.css';

import styles from "./Modal.module.css"

import React from 'react'

const Modal = ({ children, description, onClick }) => {

	var descriptionArrayString = description.split("|");

  return (
    <div className={styles.principal}>
		<div className={styles.contentSection}>
			<div className={styles.descriptionSection}>
				{descriptionArrayString.map((part, index) => (
					<React.Fragment key={index}>
					{part}
					{/* Add two line breaks if it's not the last part */}
					{index < descriptionArrayString.length - 1 && (
						<>
						<br />
						<br />
						</>
					)}
					</React.Fragment>
				))}
			</div>
			<div className={styles.backgroundSection}>
				<div className={styles.demoSection}>
					{children}
					<button className={styles.closeButton} onClick={onClick}>
						X
					</button>
				</div>
			</div>
		</div>
      	
    </div>
  );
};

export default Modal;