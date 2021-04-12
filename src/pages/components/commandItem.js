import React, { useEffect } from 'react';

// import { Container } from './styles';

function CommandItem({ data }) {
  const { value } = data;



  return (
    <>
      <div className="ItenList">
        <div className="item" key={data.id} >
          <div className="itemName">{data.id}und. {data.itemName}</div>
          <div className="itemValue">R$ {data.value}</div>
        </div>
      </div>
    </>
  )

}

export default CommandItem;