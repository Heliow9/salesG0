import React, { useEffect } from 'react';

// import { Container } from './styles';

function CommandItem({ data }) {
  const { value } = data;

  const valorBRL = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <>
      <div className="ItenList">
        <div className="item" key={data.id} >
          <div className="itemName">{data.id} {data.itemName}</div>
          <div className="itemValue">R$ {valorBRL}</div>
        </div>
      </div>
    </>
  )

}

export default CommandItem;