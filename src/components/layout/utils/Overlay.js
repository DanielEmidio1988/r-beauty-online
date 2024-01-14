// import styles from "../../../styles/components/layout/utils/overlay.module.css"
import { SOverlay } from "../../../styles/GlobalComponentsStyles"

function Overlay({isMouseOver}){
    return(
        <SOverlay className={`overlay_site ${isMouseOver ? 'show' : 'hide'}`}></SOverlay>
    )
}

export default Overlay