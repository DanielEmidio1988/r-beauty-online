import styled from "styled-components";
import { theme } from "../../../Theme";

export const SCardCattegory = styled.div`
    display: flex;
    width: 300px;
    height: 120px;
    box-shadow: 2px 2px 4px ${theme.gray_md};
    background: ${theme.white};
    cursor: pointer;

    .picture,
    .no_picture{
        width: 40%;
        height: 100%;
        overflow: hidden;
    }

    .no_picture{
        background: ${theme.gray_md} var(--gray-md);
    }

    .picture{
        img{
            object-fit: cover;
            width: 100%;
        }
    }

    .content{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 8px;  
        
        p{
            color: ${theme.gray};
        }

        p, h4{

        }
    }
`