import styled from "styled-components";
import { theme } from "../../../Theme";

export const SFooter = styled.footer`
    background: var(--dark-color);
    padding: 50px 0 30px 0;

    h2{
        color: ${theme.tertiary_color};
    }

    .footer_navigation_area, .credits_area{
        width: 100%;
    }

    .footer_navigation_area{
        display: flex;

        .footer_info_rbeauty{
            width: 100%;
            padding-left: 40px;

            .logo{
                border-radius: 50%;
                height: 72px;
                margin-bottom: 2.4vh;
                cursor: pointer;
            }
        }
    }

    .footer_menu_area{
        ul{
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 1.6vh;
        }
    }

    .footer_contact_area{
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
    }

    .credits{
        padding-top: 60px;
        text-align: center;
    }

    @media screen and (max-device-width: 500px){

        .footer_navigation_area{
            flex-direction: column;

            .footer_info_rbeauty{
                padding: 0;
            }

            .col6,
            .col3{
                width: 100%;
                
                padding: 0 40px;
            }

        }
        
    }

`