function CardCattegory(props){

    return(
        <>
            <div className="card_container_cattegory">
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
            </div>
        </>
    )
}

export default CardCattegory