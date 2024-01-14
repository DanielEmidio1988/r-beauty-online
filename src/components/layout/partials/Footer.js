import { Container, Row, Col } from "react-bootstrap"
import { SFooter } from "../../../styles/GlobalComponentsStyles"
import styles from "../../../styles/components/layout/partials/footer.module.css"
import logo from "../../../assets/utils/logo.jpg"

function Footer(){
    return(
        <footer className={styles.footer}>
            <Container fluid>
                <Row>
                    <Col sm={12} lg={6}>
                        <div className={styles.footer_info_rbeauty}>
                            <a href="/"><img src={logo} alt="logo" className={styles.logo} id="logo"/></a>
                            <h2>Sobre o r-Beauty</h2>
                            <p>Esta aplicação foi criada para auxiliar profissionais que atuam com vendas direta, não possuindo qualquer vinculo com as marcas dos produtos disponibilizados. Os dados nesta plataforma, são baseados em informações publicas de mercado e cadastrados pelos revendedores.</p>
                        </div>
                    </Col>
                    <Col sm={12} lg={3}> 
                        <h2>Mapa do Site</h2>            
                        <ul>
                            <li>Home</li>
                            <li>Catalogo de produtos</li>
                            <li>Sobre o revendedor</li>
                            <li>Sobre o r-Beauty</li>
                            <li>Central de dúvidas</li>
                        </ul>
                    </Col>
                    <Col sm={12} lg={3}>
                        <h2>Contato</h2>
                        <p>emidio.daniel@hotmail.com</p>
                        <h2>Redes Sociais</h2>
                        <div className={styles.icons_social_network}>
                            {/* Adicionar uma variável para que o endereço das redes sociais seja atualizado no Admin e não no código*/}
                            <a href="https://www.linkedin.com/in/danielemidio1988/" target="_blank"><i class="bi bi-linkedin"></i></a> 
                            <a href="https://github.com/DanielEmidio1988" target="_blank"><i class="bi bi-github"></i></a>
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