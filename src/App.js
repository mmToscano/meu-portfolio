
import Container from './components/layout/Container';
import styles from './App.module.css';
import Navbar from './components/layout/Navbar';
import Introduction from './components/layout/Introduction';

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
    </div>
    
    
  );
}

export default App;
