import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;  
        font-family: ${theme.font_family};
    }

    /* ==========================================================================================

    ESTRUTURA

    ========================================================================================== */

    main{
        width: 100%;
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    section{
        width: 80%;
    }

    .section-fluid{
        width: 100%
    }

    .section_title{
        width: 100%;
        margin-bottom: 40px;

        h2{
            border-left: 4px solid ${theme.dark_color};
            padding-left: 20px;
        }
    }


    /* ==========================================================================================

    ESPAÇAMENTO

    ========================================================================================== */


    .inner-padding{
        padding: ${theme.inner_padding};
    }

    .inner-padding-xs{
        padding: ${theme.inner_padding_xs};
    }

    .inner-padding-md{
        padding: ${theme.inner_padding_md};
    }

    .inner-padding-sm{
        padding: ${theme.inner_padding_sm};
    }

    .col6{
        width: 50%;
    }

    .col3{
        width: 25%;
    }

    /* ==========================================================================================

    TIPOGRAFIA

    ========================================================================================== */

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    label, p{
        font-size: ${theme.base_font_size};
    }

    label{
        font-weight: 600;
    }

    h1{
        font-size: ${theme.h1_font_size};
    }
    
    h2{
        font-size: ${theme.h2_font_size};
    }
    
    h3{
        font-size: ${theme.h3_font_size};
    }
    
    h4{
        font-size: ${theme.h4_font_size};
    }


    /* ==========================================================================================

    BOTÕES & INPUTS

    ========================================================================================== */

    button{
        background-color: ${theme.primary_color};
        color: ${theme.white};
        border: 2px solid transparent;
        border-radius: 10px!important;
        font-weight: 600;
        font-size: ${theme.h4_font_size};
        // padding: 0px 42px;
        height: 62px;
        transition: all .3s;
    }
    
    button:hover{
        background-color: ${theme.secondary_color};
    }

    input{
        border-radius: 8px;
        padding-left: 12px;
    }
`