import styles from '../../../styles/components/layout/utils/card.module.css'

function Card(props){
    // console.log('props')
    // console.log(props)
    return(
        <div className={styles.card_container} id=''>
            {props.product.photo ?
                <div className={styles.card_picture}>
                    <img src={props.product.photo[0]} alt="" className={styles.picture} />
                </div>
                :
                <div className={styles.card_no_picture}>

                </div>
            }
            <div className={styles.card_data_product}>
                <h4 className={props.product_name}>{props.product.name}</h4>
                <h3 className={styles.promotional_sales_value}>{props.product.promotional_sales_value}</h3>
                <h2 className={props.product.sales_value}>{props.product.sales_value}</h2>
            </div>
        </div>
    )
}

export default Card