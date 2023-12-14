import { useState } from "react";

function GlobalState(){

    const [showModal, setShowModal] = useState(false)
    const [typeModal, setTypeModal] = useState('')
    const dataTypeModal = {
        filter: "filter",
    }
    const [dataProducts, setDataProducts] = useState([
        {
            id: '1',
            name: 'Refil Nativa Spa Morango Ruby',
            description: 'Refil Nativa Spa Morango Ruby Descrição',
            photo: ['https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B01650/NSPA-MORANGO-RUBY-REF-LOC-350ML_B01650_frontal_.jpg'],
            cost_value: 30.36,
            profit_value: 13.54,
            sales_value: 43.90,
            suggested_sales_value: 35.72,
            stock: 1,
            brand: 'Boticário',
            promotional_sales_value: 0,
            category: 'Creme Hidratante',
            avaialable: true,
        },
        {
            id: '2',
            name: 'Refil Tododia Acerola e Hibisco',
            description: ' Refil Tododia Acerola e Hibisco Descrição',
            photo: ['https://images-americanas.b2w.io/produtos/6145066983/imagens/natura-tododia-hidratante-acerola-e-hibisco-refil-400ml/6145066983_1_xlarge.jpg'],
            cost_value: 20.27,
            profit_value: 14.23,
            sales_value: 34.50,
            suggested_sales_value: 28.96,
            stock: 2,
            brand: 'Natura',
            promotional_sales_value: 31.99,
            category: 'Creme Hidratante',
            avaialable: true,
        },
        {
            id: '3',
            name: 'Sabonete Liquido em Calda',
            description: 'Sabonete Liquido em Calda',
            photo: [],
            cost_value: 0,
            profit_value: 36.90,
            sales_value: 36.90,
            suggested_sales_value: 0,
            stock: 1,
            brand: 'Boticário',
            promotional_sales_value: 0,
            category: 'Produtos para banho',
            avaialable: false,
        },
        {
            id: '4',
            name: 'Body Splash Nectarina e Flor de Pessego',
            description: 'Body Splash Nectarina e Flor de Pessego',
            photo: ['https://production.na01.natura.com/on/demandware.static/-/Sites-avon-br-storefront-catalog/default/dw086fb105/produtos/135783.jpg'],
            cost_value: 15.66,
            profit_value: 6.71,
            sales_value: 22.37,
            suggested_sales_value: 22.37,
            stock: 5,
            brand: 'Avon',
            promotional_sales_value: 0,
            category: 'Perfumaria Femina',
            avaialable: true,
        },
        {
            id: '5',
            name: 'Colônia Kriska',
            description: 'Colônia Kriska',
            photo: ['https://images-na.ssl-images-amazon.com/images/I/41ZXORvHaaL._AC_UL675_SR528,675_.jpg'],
            cost_value: 60.00,
            profit_value: 39.90,
            sales_value: 99.90,
            suggested_sales_value: 85.71,
            stock: 6,
            brand: 'Natura',
            promotional_sales_value: 94.99,
            category: 'Perfumaria Femina',
            avaialable: true,
        }
    ])

    console.log('GBS showModal', showModal)

    function browserModal(condition, type){
        setShowModal(condition)
        setTypeModal(type)
    }

    return{
        showModal,
        setShowModal,
        typeModal,
        setTypeModal,
        browserModal,
        dataTypeModal,
        dataProducts,
        setDataProducts
    }
}

export default GlobalState