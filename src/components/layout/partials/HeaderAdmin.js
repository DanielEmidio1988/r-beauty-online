function AdminHeader(){
    const menuItems = [
        {
            menu: 'Vendas',
            url: '',
            submenu: [
                {
                    menu: 'Lançamento de Vendas',
                    url: '',
                }
            ]
        },
        {
            menu: 'Relatórios',
            url: '',
            submenu: [
                {
                    menu: 'Vendas',
                    url: '',
                },
                {
                    menu: 'Financeiro', //valores recebidos, receber e fluxo de caixa
                    url: '',
                }
            ]
        },
        {
            menu: 'Operação',
            url: '',
            submenu: [
                {
                    menu: 'Vendas',
                    url: '',
                },
                {
                    menu: 'Financeiro', //valores recebidos, receber e fluxo de caixa
                    url: '',
                }
            ]
        }
    ]

    return(
        <header>
            <div>
                <ul>
                    <li>Configurações</li>
                    <li>Notificações</li>
                    <li>Usuário logado</li>
                </ul>

            </div>
            <div>
                <nav>
                    <ul>
                        <li>Logo</li>
                        <li>
                            Vendas
                            <ul>
                                <li></li>
                            </ul>
                        </li>
                        <li>Relatórios</li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default AdminHeader