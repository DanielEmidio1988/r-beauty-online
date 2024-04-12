// import styles from "../../../styles/components/layout/utils/overlay.module.css"
function Overlay({isMouseOver}){
    return(
        <div className={`overlay_site ${isMouseOver ? 'show' : 'hide'}`}></div>
    )
}

export default Overlay