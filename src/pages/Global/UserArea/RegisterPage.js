import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { goToHomePage, goToLoginPage } from '../../../routes/coordinator.js'
import backgroundregister from '../../../assets/pages/register/register_background.jpg'

function RegisterPage(){

    const navigate = useNavigate()
    const [formRegister, setFormRegister] = useState({
        username: '',
        email: '',
        shopname: '',
        password: '',
    })
    const [confirmPassword, setConfirmPassword] = useState('')

    function registerUser(){
        console.log('formRegister', formRegister)

        // Buscar dados da API

        goToHomePage(navigate)
    }

    function onChangeForm(event){
        console.log('onChangeForm', formRegister)
        setFormRegister({...formRegister,[event.target.name]: event.target.value})
    }

    return(
        <main className='register-page'>
            <section className='login-register-page__section'>
                <div className='login-register-page__background-login'>
                    <img src={backgroundregister} />
                </div>
                <div className='login-register-page__login-area register_area'>
                    <div className='one-column-area'>
                        <label htmlFor="username">
                            Nome de usuário
                        </label>
                        <input type="text" value={formRegister.username} name="username" placeholder="Nome" onChange={onChangeForm} required/>
                    </div>
                    <div className='one-column-area'>
                        <label htmlFor="username">
                            Nome da Loja
                        </label>
                        <input type="text" value={formRegister.shopname} name="shopname" placeholder="Nome da Loja (Opcional)" onChange={onChangeForm}  />
                    </div>
                    <div className='one-column-area'>
                        <label htmlFor="email">
                            E-mail
                        </label>
                        <input type="email" value={formRegister.email} name="email" placeholder="exemplo@exemplo.com" onChange={onChangeForm} required/>
                    </div>
                    <div className='one-column-area'>
                        <label htmlFor="email">
                            Senha
                        </label>
                        <input type="password" value={formRegister.password} name="password" placeholder="Senha" onChange={onChangeForm} required/>
                    </div>
                    <div className='one-column-area'>
                        <label htmlFor="email">
                            Confirme sua senha
                        </label>
                        <input type="password" name="confirmPassword" value={confirmPassword} placeholder="Confirme sua senha" onChange={(event)=> setConfirmPassword(event.target.value)} required />
                    </div>
                    <div className='two-column-area'>
                        <div>
                            <button className='btn_default' onClick={()=> goToLoginPage(navigate)}>Voltar</button>
                        </div>
                        <div>
                            <button className='btn_reverse' onClick={()=> registerUser()}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default RegisterPage