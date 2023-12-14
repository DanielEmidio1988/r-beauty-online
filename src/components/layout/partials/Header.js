import { Container, Col, Row } from "react-bootstrap"
import styles from "../../../styles/components/layout/partials/header.module.css"
import logo from "../../../assets/utils/logo.jpg"

function Header(){
    return(
        <header className={styles.header} id="header">
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <div className={styles.container_header} id="container_header">
                            <div className={styles.header_logo}>
                                <a href="/"><img src={logo} alt="logo" className={styles.logo} id="logo"/></a>
                            </div>
                            <div className={styles.header_search}>
                                <input className={styles.header_search_input} type="text" placeholder="Pesquise seu produto"/>
                                <i className="bi bi-search"></i>
                            </div>
                            <div className={styles.header_cart_data}>
                                <i className="bi bi-cart2"></i>
                            </div>
                            <div className={styles.header_user}>
                                <i className="bi bi-person-circle"></i>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header