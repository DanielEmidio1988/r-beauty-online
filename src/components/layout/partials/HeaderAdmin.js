function AdminHeader(){
    const menuItems = [
        {
            menu: 'Vendas',
            submenu: [
                {
                    menu: 'Vendas',
                    url: '',
                },
                {
                    menu: 'Campanhas',
                    url: '',
                }
            ]
        },
        {
            menu: 'Operação',
            submenu: [
                {
                    menu: 'Estoque',
                    url: '',
                },
                {
                    menu: 'Campanhas',
                    url: '',
                },
                {
                    menu: 'Marcas',
                    url: '',
                }
            ]
        },
        {
            menu: 'Relatórios',
            submenu: [
                {
                    menu: 'Vendas',
                    url: '',
                },
                {
                    menu: 'Financeiro', //valores recebidos, receber e fluxo de caixa
                    url: '',
                },
                {
                    menu: 'Operacional', //valores recebidos, receber e fluxo de caixa
                    url: '',
                }
            ]
        }
    ]

    return(
        <header className="header_admin">
            <nav className="header_admin__menu">
                <ul className="menu">
                    {menuItems.map((item)=>{
                        return(
                            <li className="menu-item">
                                <p className="menu-item__option">{item.menu}</p>

                                {item.submenu.length > 0 ?
                                <ul className="submenu">
                                    {item.submenu.map((submenu)=>{
                                        return(
                                            <li className="submenu-item">
                                                <p className="submenu-item__option">{submenu.menu}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                                :
                                ''
                                }
                            </li>
                        )
                    })}
                </ul>
                
            </nav>

        </header>
    )
}

export default AdminHeader