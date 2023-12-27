import { Container, Row, Col } from "react-bootstrap"
import styles from "../../../styles/components/layout/partials/footer.module.css"

function Footer(){
    return(
        <footer className={styles.footer}>
            <Container fluid>
                <Row>
                    <Col sm={12} lg={6}>
                        <h2>Sobre o r-Beauty</h2>
                        <p>Esta aplicação foi criada para auxiliar profissionais que atuam com vendas direta, não possuindo qualquer vinculo com as marcas dos produtos disponibilizados. </p>

                    </Col>
                    <Col sm={12} lg={3}>
                        <ul>
                            <li>Página Principal</li>
                            <li>Sobre o revendedor</li>
                        </ul>
                    </Col>
                    <Col sm={12} lg={3}>
                        <h2>Contato</h2>
                        <p>emidio.daniel@hotmail.com</p>
                        <h2>Redes Sociais</h2>
                        <div>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <div className={styles.credits}>
                            <p>r-Beauty foi desenvolvido por Daniel Emidio</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer