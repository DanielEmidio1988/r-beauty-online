import styled from "styled-components";
import { theme } from "../Theme";

export const SLoginPage = styled.main`
    height: 100vh;
    background-color: ${theme.white};
    
    .login-page__section{
        display: flex;
        width: 100%;
    }

    .login-page__background-login,
    .login-page__login-area{
        width: 50%;
    }

    input{
        height: 62px;
        border: 1px solid ${theme.gray};
    }

    .login-page__background-login{  
        height: 100vh;
        overflow: hidden;

        img{
            object-fit: cover;
        }
    }

    .login-page__login-area{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        .one-column-area,
            .two-column-area{
                display: flex;
                width: 60%;
            }

        .one-column-area{
            flex-direction: column;

            label{
                font-size: ${theme.h4_font_size};
                margin-bottom: 4px;
            }

            p{
                text-align: right;
            }

            a{
                color: ${theme.gray};
            }
        }

        .two-column-area{
            div{
                width: 50%;
                display: flex;
                justify-content: center;
                padding: 0 20px;

                button{
                    margin: 0 auto;
                    width: 100%;
                }

                .btn_reverse{
                    border-color: ${theme.primary_color};
                    background-color: ${theme.white};
                    color: ${theme.primary_color};  
                }

                .btn_reverse:hover{
                    border-color: ${theme.secondary_color};
                    background-color: ${theme.white};
                    color: ${theme.secondary_color}; 
                }
            }           
        }

        .politica-privacidade{
            margin-top: 8vh;
            width: 60%;

            p{
                text-align: left;
            }

            a{
                color: ${theme.gray};
            }
        }
    }

    @media screen and (min-device-width: 500px){


    }

    @media screen and (max-device-width: 768px){
    
    }

    @media screen and (max-device-width: 500px){

        .login-page__background-login{
            display: none;
        }
    
        .login-page__login-area{
            .two-column-area{
                flex-direction: column;
                gap: 40px;

                div{
                    width: 100%;

                    button{
                        width: 100%;
                    }
                }
            }
        }        
    }

`