
import Container from './components/layout/Container';
import styles from './App.module.css';
import Navbar from './components/layout/Navbar';
import Introduction from './components/layout/Introduction';
import AboutMe from './components/layout/AboutMe';

//navbar
//introdução
//SObre mim
//Habilidades
//Projetos

function App() {
  return (
    <div className={styles.principal}>
      <Navbar/>
      <Introduction/>
      <AboutMe/>
    </div>
    
    
  );
}

export default App;
