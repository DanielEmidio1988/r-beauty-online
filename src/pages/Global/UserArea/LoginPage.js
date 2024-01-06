import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../../styles/pages/loginpage.module.css'
import backgroundlogin from '../../../assets/pages/login/login_background.jpg'


function LoginPage(){
    return(
        <main className={styles['login-page']}>
            <section>
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={5} md={5} className={styles['no-padding-col']}>
                            <div className={styles['login-page__background-login']}>
                                <img src={backgroundlogin} />
                            </div>
                        </Col>
                        <Col xs={12} sm={7} md={7}>
                            <div className={styles['login-page__login-area']}>
                                <div className={styles['one-column-area']}>
                                    <label for="email">
                                        E-mail
                                    </label>
                                    <input type="email" name="email" placeholder="exemplo@exemplo.com"/>
                                </div>
                                <div className={styles['one-column-area']}>
                                    <label for="email">
                                        Senha
                                    </label>
                                    <input type="email" name="email" placeholder="exemplo@exemplo.com"/>
                                    <p><a href=''>Esqueci minha senha</a></p>
                                </div>
                                <div className={styles['two-column-area']}>
                                    <div>
                                        <button>Acessar</button>
                                    </div>
                                    <div>
                                        <button className={styles.btn_reverse}>Não tenho conta</button>
                                    </div>
                                </div>
                                <div className={styles['politica-privacidade']}>
                                    <p><a href=''>Politica de privacidade</a></p>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default LoginPage