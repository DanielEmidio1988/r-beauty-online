import styled from "styled-components";
import { theme } from "../Theme";

export const SHome = styled.main`
    background: ${theme.gray_lg};
    min-height: 80vh;
    padding: ${theme.inner_padding_md};

    section{
        .section_categorys_cards_box,
        .section_brand_box,
        .section_products_cards_box{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    .section_categorys_cards{
        .section_categorys_cards_box{
            align-items: center;
            gap: 2vw;
        }
    }

    .section_brand{
        .section_brand_box{
            align-items: center;
            gap: 4vw;
        } 
    }

    .section_products_cards{
        .section_products_cards_box{
            gap: 4vh 2vw;
        }
    }

`

// .homepage .section_categorys_cards,
//     .homepage .section_products_cards{
//         padding: var(--inner-padding-xs);
// }