import styles from "../../../styles/components/layout/utils/overlay.module.css"

function Overlay({isMouseOver}){
    return(
        <div className={`${styles.overlay_site} ${isMouseOver ? 'show' : 'hide'}`}></div>
    )
}

export default Overlay