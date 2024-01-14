import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import {Header, Footer, Card, CardCattegory} from "../../../components/GlobalComponents";
import { SHome } from "../../../styles/GlobalComponentsStyles";

function HomePage(){
    const context = useContext(GlobalContext)
    // Obs: ajustar a variável 'cattegoryList' para receber os dados dos produtos cadastrados na lista de produto como a categoria e a foto do primeiro produto valido na categoria
    const cattegoryList = [{
        name:"Creme Hidratante",
        image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B01650/NSPA-MORANGO-RUBY-REF-LOC-350ML_B01650_frontal_.jpg"
    },{
        name:"Perfumaria Feminina",
        image: "https://production.na01.natura.com/on/demandware.static/-/Sites-avon-br-storefront-catalog/default/dw086fb105/produtos/135783.jpg"
    },{
        name:"Shampoos",
        image: ""
    },{
        name:"Maquiagem",
        image: ""
    }
    ]

    return(
        <>
        <Header/>
        <SHome className="homepage" id="homepage">

            <section className="introduction_area">
                <div className="section_title">
                    <h2>Catálogo de Cassia Oliveira</h2>
                </div>   
            </section>

            <section className="section_categorys_cards inner-padding-xs">
                <div className="section_title">
                    <h2>Categorias</h2>
                </div>
                <div className="section_categorys_cards_box">
                    {cattegoryList.map((cattegory, index)=>{
                        return(
                            <>
                            <CardCattegory
                                key={index}
                                cattegory={cattegory}
                            />
                            </>
                            )
                    })}                             
                </div>  
            </section>

            <section className="section_products_cards inner-padding-xs">
                <div className="section_title">
                    <h2>Produtos</h2>
                </div>    
                <div className="section_products_cards_box">
                    {context.dataProducts.length > 0 ?
                        context.dataProducts.map((product,index)=>{
                        return(
                            <Card
                                key={index}
                                product={product}
                            />
                            )
                        })
                        :
                        <h3>Não há produtos cadastrados nesta loja</h3>
                        }
                </div>
            </section>
        </SHome>
        <Footer/>
        </>
    )
}

export default HomePage