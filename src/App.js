import styles from './App.module.css';
import Navbar from './components/pages//Navbar';
import Introduction from './components/pages/Introduction';
import AboutMe from './components/pages/AboutMe';
import Abilities from './components/pages/Abilities';
import Projects from './components/pages/Projects';

//navbar
//introdução
//Sobre mim
//Habilidades
//Projetos

function App() {
  return (
    <div className={styles.principal}>
      <Navbar/>
      <Introduction/>
      <AboutMe/>
      <Abilities/>
      <Projects/>
    </div>
  );
}

export default App;
