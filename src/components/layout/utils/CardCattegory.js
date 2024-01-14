import { SCardCattegory } from "../../../styles/GlobalComponentsStyles"

function CardCattegory(props){

    return(
        <>
            <SCardCattegory className="card_container">
                {props.cattegory.image ?
                    <div className="picture">
                        <img src={props.cattegory.image} alt="imagem categoria"/>
                    </div>
                :
                    <div className="no_picture">
                        
                    </div>
                }
                <div className="content">
                    <h4>{props.cattegory.name}</h4>
                    <p>100 products</p>
                </div>
            </SCardCattegory>
        </>
    )
}

export default CardCattegory