import styles from "../../../styles/components/layout/utils/cardcattegory.module.css"
function CardCattegory(props){

    return(
        <>
            <div className={styles.card_container}>
                {props.cattegory.image ?
                    <div className={styles.picture}>
                        <img src={props.cattegory.image} alt="imagem categoria"/>
                    </div>
                :
                    <div className={styles.no_picture}>
                        
                    </div>
                }
                <div className={styles.content}>
                    <h4>{props.cattegory.name}</h4>
                    <p>100 products</p>
                </div>
            </div>
        </>
    )
}

export default CardCattegory