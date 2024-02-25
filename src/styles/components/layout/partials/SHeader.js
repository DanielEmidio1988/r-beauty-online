import styled from "styled-components";
import { theme } from "../../../Theme";

export const SHeader = styled.header`
    background-color: ${theme.dark_color};
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;

    .container_header{
        display: flex;
        width: 100%;
    }

    i{
        color: ${theme.white};
        font-size: ${theme.h2_font_size};
        cursor: pointer;
    }

    .header_logo, .header_search,.header_cart_data,.header_user{
        display: flex;
        align-items: center;
        justify-content: center;
    } 
    
    .header_logo{
        width: 20%;
    }

    .header_logo p{
        color: ${theme.tertiary_color};
        cursor: default;
        margin-bottom: 0;
        font-weight: 700;
        font-size: 1.4rem;
    }

    .header_search{
        width: 60%;
        position: relative;
    }

    .header_search .header_search_input{
        width: 100%;
        height: 72%;
        border: none;    
    }

    .header_search i{
        position: absolute;
        right: 2%;
        color: ${theme.secondary_color};
        font-size: ${theme.h3_font_size};
    }

    .header_cart_data{
        width: 10%;
    }

    .header_user{
        width: 10%;
        position: relative;

        .menu_user{
            background-color: ${theme.white};
            border-radius: 12px;
            padding: 40px 20px;
            width: 200px;
            position: absolute;
            top: 56px;
            right: 20px;
            display: flex;
            flex-direction: column;
            gap: 1.2vh;
            z-index: 100;
            transition: opacity 0.3s ease-in-out;

            &.show{
                opacity: 1;
            }

            &.hide{
                opacity: 0;
            }

            button{
                width: 100%;
            }

            .btn_header_reverse{
                border-color: ${theme.primary_color};
                background-color: ${theme.white};
                color: ${theme.primary_color};  
            }

            .btn_header_reverse:hover{
                border-color: ${theme.secondary_color};
                background-color: ${theme.white};
                color: ${theme.secondary_color};  
            }
        }
    }

    @media screen and (max-device-width: 500px){
        height: 18vh;
        align-items: flex-start;
        padding-top: 8px;

        i{
            font-size: var(--h2-font-size);
        }

        .container_header{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }

        .header_logo, .header_search, .header_cart_data, .header_user{
            width: 100%;
        }

        .header_logo{
            grid-column-start: 1;
            grid-column-end: 1;
            grid-row-start: 1;
            grid-row-end: 1;
        } 

        .header_search{
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 2;
            grid-row-end: 2;
            padding-top: 12px;
            height: 8vh;

            .header_search_input{
                height: 100%;      
            }

            i{
                right: 4%;
            }
        }

        .header_cart_data{
            grid-column-start: 2;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 1;
        }

        .header_user{
            grid-column-start: 3;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 1;
        }

        

    }

`