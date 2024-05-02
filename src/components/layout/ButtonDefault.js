import styles from "./ButtonDefault.module.css"

function ButtonDefault({description, info, Img, link}) {

    function openNewTab(url) {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }
    
    return (
        <div className={styles.buttonPrincipal}>
            <a href="#" onClick={() => openNewTab(link)}>
                <button href=""><img src={Img} alt=""/></button>
            </a>
            <h1>{description}</h1>
            <h1>{info}</h1>
            
        </div>
    )
}

export default ButtonDefault