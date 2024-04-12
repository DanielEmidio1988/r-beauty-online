
import logo from "../../../assets/utils/logo.jpg"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_navigation_area">
                <div className="footer_logo_area col6">
                    <div className="footer_info_rbeauty">
                        <a href="/"><img src={logo} alt="logo" className="logo" id="logo" /></a>
                        <h2>Sobre o r-Beauty</h2>
                        <p>Esta aplicação foi criada para auxiliar profissionais que atuam com vendas direta, não possuindo qualquer vinculo com as marcas dos produtos disponibilizados. Os dados nesta plataforma, são baseados em informações publicas de mercado e cadastrados pelos revendedores.</p>
                    </div>
                </div>
                <div className="footer_menu_area col3">
                    <h2>Mapa do Site</h2>
                    <ul>
                        <li>Home</li>
                        <li>Catalogo de produtos</li>
                        <li>Sobre o revendedor</li>
                        <li>Sobre o r-Beauty</li>
                        <li>Central de dúvidas</li>
                    </ul>
                </div>
                <div className="footer_contact_area col3">
                    <h2>Contato</h2>
                    <p>emidio.daniel@hotmail.com</p>
                    <h2>Redes Sociais</h2>
                    <div className="icons_social_network">
                        {/* Adicionar uma variável para que o endereço das redes sociais seja atualizado no Admin e não no código*/}
                        <a href="https://www.linkedin.com/in/danielemidio1988/" target="_blank"><i class="bi bi-linkedin"></i></a>
                        <a href="https://github.com/DanielEmidio1988" target="_blank"><i class="bi bi-github"></i></a>
                    </div>
                </div>
            </div>
            <div className="credits_area">
                <div className="credits">
                    <p>r-Beauty foi desenvolvido por Daniel Emidio</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer