import styles from '../../../styles/components/layout/utils/card.module.css'

function Card(props){

    return(

        
        <div className={styles.card_container} id=''>
            {props.product.photo.length > 0 ?
                <div className={styles.card_picture}>
                    <img src={props.product.photo[0]} alt="" className={styles.picture} />
                </div>
                :
                <div className={styles.card_no_picture}>
                    <p>Sem imagem</p>
                </div>
            }
            <div className={styles.card_data_product}>
                <h4 className={props.product_name}>{props.product.name}</h4>
                {props.product.promotional_sales_value > 0 ?
                    <>
                        <h2 className={styles.promotional_sales_value}>
                            R$ {props.product.promotional_sales_value}
                                <h4 className={props.product.sales_value}>
                                    De: <span>R$ {props.product.sales_value}</span>
                                </h4>
                        </h2> 
                    </>      
                :
                    <h2 className={props.product.sales_value}>R$ {props.product.sales_value}</h2>  
                }
     
            </div>
        </div>
    )
}

export default Card