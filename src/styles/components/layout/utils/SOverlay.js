import styled from "styled-components";
import { theme } from "../../../Theme";

export const SOverlay = styled.div`
    height: 100vh;
    width: 100%;
    z-index: 1;
    background-color: ${theme.dark_color};
    opacity: 0.8;
    position: fixed;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease-in-out; 

    &.show{
        opacity: 0.7;
    }

    &.hide{
        opacity: 0;
    }

`