import './Modal.module.css';

import styles from "./Modal.module.css"

const Modal = ({ children, onClick }) => {

  return (
    <div className={styles.principal} onClick={onClick}>
      <div className={styles.contentSection}>
        {children}
        <button className={styles.closeButton}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;