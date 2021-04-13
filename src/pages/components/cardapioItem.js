import React from 'react';

// import { Container } from './styles';

function CardItem({ data, key }) {


  function handlerShowItem() {
    console.log(data.id)
  }
  function handlerRealValue(valor) {
    const valorREAL = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorREAL;
  }

  return <div className="listItem" onClick={handlerShowItem} key={data.id} >

    <div className="img">
      <img src={data.imgUrl} alt="" id="imagem" />
    </div>
    <div className="description">
      <span className="itemName">{data.itemName}</span>
      <span className="valueItem">{handlerRealValue(data.price)}</span>
    </div>
  </div>
}

export default CardItem;