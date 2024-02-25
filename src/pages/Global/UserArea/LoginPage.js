import { SLoginRegisterPage } from '../../../styles/GlobalComponentsStyles.js'
import backgroundlogin from '../../../assets/pages/login/login_background.jpg'
import { useNavigate } from 'react-router-dom'
import { goToRegisterPage, goToHomePage } from '../../../routes/coordinator.js'
import { useState } from 'react'


function LoginPage() {
    const navigate = useNavigate()
    const [form, setForm]= useState({
        login: '',
        password: ''
    })

    function checkLoginUser(){

        // Checar dados da API

        goToHomePage(navigate)
    }

    function onChangeForm(event){
        setForm({...form,[event.target.name]: event.target.value})
    }

    return (

        // aplicar useForm
        <SLoginRegisterPage className='login-page'>
            <section className='login-register-page__section'>
                <div className='login-register-page__background-login'>
                    <img src={backgroundlogin} />
                </div>
                <div className='login-register-page__login-area'>
                    <div className='one-column-area'>
                        <label htmlFor="email">
                            E-mail
                        </label>
                        <input type="email" value={form.login} onChange={onChangeForm} name="email" placeholder="exemplo@exemplo.com" required/>
                    </div>
                    <div className='one-column-area'>
                        <label htmlFor="email">
                            Senha
                        </label>
                        <input type="password" value={form.password} onChange={onChangeForm} name="password" placeholder="exemplo@exemplo.com" required/>
                        <p><a href=''>Esqueci minha senha</a></p>
                    </div>
                    <div className='two-column-area'>
                        <div>
                            <button className='btn_default' onClick={()=>checkLoginUser()}>Acessar</button>
                        </div>
                        <div>
                            <button className='btn_reverse' onClick={()=>goToRegisterPage(navigate)}>Não tenho conta</button>
                        </div>
                    </div>
                    <div className='politica-privacidade'>
                        <p><a href=''>Politica de privacidade</a></p>
                    </div>

                </div>
            </section>
        </SLoginRegisterPage>
    )
}

export default LoginPage