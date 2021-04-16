import React, { useState } from 'react';
import CardItem from './components/cardapioItem'
// import { Container } from './styles';

function Home() {


  const [ComandList, setComandList] = useState([

    {
      id: 1,
      itemName: 'Garangueijo',
      imgUrl: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-caranguejo-1200x774.jpg',
      price: 2.50
    },
    {
      id: 2,
      itemName: 'Linguiça na Brasa',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiCDTErzCt3v7PYWlbVlyJjxXoDoG_XGX8A&usqp=CAU',
      price: 22.30
    },
    {
      id: 3,
      itemName: 'Maminha - Arroz',
      imgUrl: 'https://cdn.guiadacozinha.com.br/wp-content/uploads/2019/10/bife-de-maminha-arroz-ervas.jpg',
      price: 3.30
    },
    {
      id: 4,
      itemName: 'Coca-lata',
      imgUrl: 'https://oitalia.com.br/wp-content/uploads/2019/11/COCA-COLA-LATA.jpeg',
      price: 2.50
    },
    {
      id: 5,
      itemName: 'Garangueijo',
      imgUrl: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-caranguejo-1200x774.jpg',
      price: 2.30
    },
    {
      id: 6,
      itemName: 'Arrumadinho C/S',
      imgUrl: 'https://s2.glbimg.com/VFLq1ZSGI8NjvCuR92SLicMUufQ=/0x0:418x288/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/11/52/634/Arrumadinho.jpg',
      price: 18.50
    },
    {
      id: 7,
      itemName: 'Garangueijo',
      imgUrl: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-caranguejo-1200x774.jpg',
      price: 2.30
    },
    {
      id: 8,
      itemName: 'Garangueijo',
      imgUrl: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-caranguejo-1200x774.jpg',
      price: 2.30
    },
    {
      id: 9,
      itemName: 'Garangueijo',
      imgUrl: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-caranguejo-1200x774.jpg',
      price: 2.30
    },
    {
      id: 10,
      itemName: 'Garangueijo',
      imgUrl: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-caranguejo-1200x774.jpg',
      price: 2.30
    },
    {
      id: 11,
      itemName: 'Garangueijo',
      imgUrl: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-caranguejo-1200x774.jpg',
      price: 2.30
    },
  ]);


  return <>


    <div className="saleItens">
      {ComandList.map((item, key) => (
        <CardItem data={item} key={key} />
      ))}
    </div>

  </>
}

export default Home;