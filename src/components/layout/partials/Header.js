import Overlay from "../utils/Overlay"
import { useState } from "react"

function Header() {
    const [isMouseOver, setIsMouseOver] = useState(false)
    let menuLeaveTimeout

    const handleMouseEnter = () => {
        setIsMouseOver(true)
    }

    const handleMenuEnter = () => {
        //Impede a mudança do estado 'isMouseOver' para falso enquanto o mouse estiver sobre o menu /desktop.
        clearTimeout(menuLeaveTimeout)
    }

    const handleMenuLeave = () => {
        //Adiciona um atraso para o fechamento do menu
        menuLeaveTimeout = setTimeout(() => {
            setIsMouseOver(false)
        }, 1000)
    }

    return (
        <header className="header" id="header">
            {isMouseOver && <Overlay isMouseOver={isMouseOver} />}
            <div className="container_header" id="container_header">
                <div className="header_logo">
                    <p>r-Beauty</p>
                </div>
                <div className="header_search">
                    <input className="header_search_input" type="text" placeholder="Pesquise seu produto" />
                    <i className="bi bi-search"></i>
                </div>
                <div className="header_cart_data">
                    <i className="bi bi-cart2"></i>
                </div>
                <div className="header_user">
                    <i className="bi bi-person-circle"
                        onMouseEnter={handleMouseEnter}
                    ></i>
                    {isMouseOver &&
                        <ul
                            className={`menu_user ${isMouseOver ? 'show' : 'hide'}`}
                            onMouseEnter={handleMenuEnter}
                            onMouseLeave={handleMenuLeave}
                        >
                            <li>Area exclusiva para revendedores.</li>
                            <li><button className="btn_header">Entrar</button></li>
                            <li><button className="btn_header_reverse">Cadastre-se</button></li>
                        </ul>
                    }

                </div>
            </div>
        </header>
    )
}

export default Header