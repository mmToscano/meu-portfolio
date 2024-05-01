import styles from './App.module.css';
import Navbar from './components/pages//Navbar';
import Introduction from './components/pages/Introduction';
import AboutMe from './components/pages/AboutMe';
import Abilities from './components/pages/Abilities';
import Projects from './components/pages/Projects';
import Modal from './components/layout/Modal';
import DemonstrationModal from './components/layout/DemonstrationModal';

import React, { useState } from 'react';
import DemonstrationVideoModal from './components/layout/DemonstrationVideoModal';

function App() {

  const [showModal, setShowModal] = useState(false);
  const [modalImgs, setModalImgs] = useState([]);
  const [modalVideo, setModalVideo] = useState();

  function functionSetModalImgs(imgs, video) {
    setModalImgs(imgs);
    setModalVideo(video);
  }
  
  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className={styles.principal}>
      {/* {showModal && modalImgs && !modalVideo &&
        <Modal onClick={toggleModal}>{<DemonstrationModal imgs={modalImgs}/>}</Modal>
      } */}
      {showModal && modalVideo && 
        <Modal onClick={toggleModal}>{<DemonstrationVideoModal video={modalVideo}/>}</Modal>
      }

      {showModal && modalImgs && !modalVideo &&
        <Modal onClick={toggleModal}>{<DemonstrationModal imgs={modalImgs}/>}</Modal>
      }
      <Navbar/>
      <Introduction/>
      <AboutMe/>
      <Abilities/>
      <Projects showModal={toggleModal} sendImgsToApp={functionSetModalImgs}/>
    </div>
  );
}

export default App;
