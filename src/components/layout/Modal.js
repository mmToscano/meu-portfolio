import './Modal.module.css';

import styles from "./Modal.module.css"

const Modal = ({ children, onClick }) => {

  return (
    <div className={styles.principal}>
      <div className={styles.contentSection}>
        {children}
        <button className={styles.closeButton} onClick={onClick}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;