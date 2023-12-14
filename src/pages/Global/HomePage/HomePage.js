import { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { GlobalContext } from "../../../context/GlobalContext";
import Header from "../../../components/layout/partials/Header";
import Card from "../../../components/layout/utils/Card";
import styles from '../../../styles/pages/homepage.module.css'

function HomePage(){
    const context = useContext(GlobalContext)

    return(
        <>
        <Header/>
        <main className={styles.homepage} id="homepage">
            <section className={styles.section_products_cards}>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className={styles.section_products_cards_box}>
                                {
                                context.dataProducts.length > 0 ?
                                context.dataProducts.map((product,index)=>{
                                    return(
                                        <Card
                                        key={index}
                                        product={product}/>
                                    )
                                })
                                :
                                ''
                                }
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
        </>
    )
}

export default HomePage