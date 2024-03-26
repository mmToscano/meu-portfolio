import styles from "./Introduction.module.css"
import photo from "../../img/minha foto.jpeg"
import whatsappPhoto from "../../img/whatsapp.png"
import file from "../../fake_database/curriculo.pdf";

function Introduction() {

    const downloadFile = () => {
        const link = document.createElement("a");
        link.href = file;
        link.download = "curriculo_Matheus_Toscano.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function openNewTab(url) {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
      }


    return (
        <div className={styles.introduction}>
            <div className={styles.infoArea}>
                <h1>Olá, eu sou o</h1>
                <h1>Matheus Toscano Moraes</h1>
                <h3>Programador júnior</h3>
                <div className={styles.buttonArea}>
                    <button onClick={downloadFile}>Download cv</button>
                    <a href="#" onClick={() => openNewTab("https://wa.me/5534999619084")}>
                        <div>
                            <h2>Entre em contato</h2> 
                            <img src={whatsappPhoto}/>
                        </div>
                    </a>
                </div>
            </div>
            <img src={photo}/>
            
            
        </div>
    );
}

export default Introduction;