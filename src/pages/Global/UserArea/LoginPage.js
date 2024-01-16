import { SLoginPage } from '../../../styles/GlobalComponentsStyles.js'
import backgroundlogin from '../../../assets/pages/login/login_background.jpg'


function LoginPage() {
    return (

        // aplicar useForm
        <SLoginPage className='login-page'>
            <section className='login-page__section'>
                <div className='login-page__background-login'>
                    <img src={backgroundlogin} />
                </div>
                <div className='login-page__login-area'>
                    <div className='one-column-area'>
                        <label for="email">
                            E-mail
                        </label>
                        <input type="email" name="email" placeholder="exemplo@exemplo.com" />
                    </div>
                    <div className='one-column-area'>
                        <label for="email">
                            Senha
                        </label>
                        <input type="email" name="email" placeholder="exemplo@exemplo.com" />
                        <p><a href=''>Esqueci minha senha</a></p>
                    </div>
                    <div className='two-column-area'>
                        <div>
                            <button>Acessar</button>
                        </div>
                        <div>
                            <button className='btn_reverse'>Não tenho conta</button>
                        </div>
                    </div>
                    <div className='politica-privacidade'>
                        <p><a href=''>Politica de privacidade</a></p>
                    </div>

                </div>
            </section>
        </SLoginPage>
    )
}

export default LoginPage