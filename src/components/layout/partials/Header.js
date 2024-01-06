import { Container, Col, Row } from "react-bootstrap"
import styles from "../../../styles/components/layout/partials/header.module.css"
import Overlay from "../utils/Overlay"
import { useState } from "react"

function Header() {
    const [isMouseOver, setIsMouseOver] = useState(false)
    let menuLeaveTimeout

    const handleMouseEnter = () => {
        setIsMouseOver(true)
    }

    const handleMenuEnter = () => {
        //Impede a mudança do estado 'isMouseOver' para falso enquanto o mouse estiver sobre o menu /desktop.
        clearTimeout(menuLeaveTimeout)
    }

    const handleMenuLeave = () => {
        //Adiciona um atraso para o fechamento do menu
        menuLeaveTimeout = setTimeout(() => {
            setIsMouseOver(false)
        }, 1000)
    }

    return (
        <header className={styles.header} id="header">
            {isMouseOver && <Overlay isMouseOver={isMouseOver} />}
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <div className={styles.container_header} id="container_header">
                            <div className={styles.header_logo}>
                                <h1>r-Beauty</h1>
                            </div>
                            <div className={styles.header_search}>
                                <input className={styles.header_search_input} type="text" placeholder="Pesquise seu produto" />
                                <i className="bi bi-search"></i>
                            </div>
                            <div className={styles.header_cart_data}>
                                <i className="bi bi-cart2"></i>
                            </div>
                            <div
                                className={styles.header_user}
                            >
                                <i className="bi bi-person-circle"
                                    onMouseEnter={handleMouseEnter}
                                ></i>
                                {isMouseOver &&
                                    <ul
                                        className={`${styles.menu_user} ${isMouseOver ? 'show' : 'hide'}`}
                                        onMouseEnter={handleMenuEnter}
                                        onMouseLeave={handleMenuLeave}
                                    >
                                        <li>Area exclusiva para revendedores.</li>
                                        <li><button className={styles.btn_header}>Entrar</button></li>
                                        <li><button className={styles.btn_header_reverse}>Cadastre-se</button></li>
                                    </ul>
                                }

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header