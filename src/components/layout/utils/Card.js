import { SCardProduct } from '../../../styles/GlobalComponentsStyles'

function Card(props){
    return(   
        <SCardProduct className="card_container">
            {props.product.photo.length > 0 ?
                <div className="card_picture">
                    <img src={props.product.photo[0]} alt="" className="picture" />
                </div>
                :
                <div className="card_no_picture">
                    <p>Sem imagem</p>
                </div>
            }
            <div className="card_data_product">
                <h4 className="product_name">{props.product.name}</h4>
                {props.product.promotional_sales_value > 0 ?
                    <>
                        <h2 className="promotional_sales_value">
                            R$ {props.product.promotional_sales_value}
                                <h4 className="product.sales_value">
                                    De: <span>R$ {props.product.sales_value}</span>
                                </h4>
                        </h2> 
                    </>      
                :
                    <h2 className="product.sales_value">R$ {props.product.sales_value}</h2>  
                } 
            </div>
        </SCardProduct>
    )
}

export default Card