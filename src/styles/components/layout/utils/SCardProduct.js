import styled from "styled-components";
import { theme } from "../../../Theme";

export const SCardProduct = styled.div`
    width: 300px;
    height: 400px;
    border-radius: 4px;
    box-shadow: 4px 4px 4px ${theme.gray_md};
    background-color: ${theme.white};
    cursor: pointer;

    .card_picture, .card_no_picture{
        width: 100%;
        height: 50%;
    }

    .card_no_picture{
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.gray_md};

        p{
            font-weight: 700;
            color: ${theme.gray};
        }
    }

    .card_picture{
        overflow: hidden;
        text-align: center;
        background-color: ${theme.white};

        .picture{
            height: 100%;
            object-fit: cover;
        }
    }

    .card_data_product{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50%;
        text-align: center;  

        h2{
            display: flex;
            align-items: center;
            gap: 20px;

            h4{
                color: var(--gray);
                text-decoration: line-through;
            }
        }
    }

`