import styled from "styled-components";
import { theme } from "../../../Theme";

export const SFooter = styled.footer`
    background: var(--dark-color);
    padding: 50px 0 30px 0;

    .footer_info_rbeauty{
        width: 100%;
        padding-left: 40px;
    }

    .logo{
        border-radius: 50%;
        height: 72px;
        margin-bottom: 2.4vh;
        cursor: pointer;
    }

    h2,p,ul{
        color: ${theme.white} var(--white);
    }

    h2{
        color: ${theme.tertiary_color};
    }

    ul{
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1.6vh;
    }

    .icons_social_network{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 2vw;

        i{
            font-size: 32px;
            color: var(--white);
        }
    }

    .credits{
        padding-top: 60px;
        text-align: center;
    }

`