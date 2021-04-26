import React from 'react';
import style from './styles/table.module.css'
import TableImg from '../assets/table.jpg'




// import { Container } from './styles';

function Table() {
  

  return (
    <div className={style.container}>
      <div className={style.formTable}>
        <div>
          <h3>Cadastrar Mesa</h3>
          <input type={style.CadTable} />
          <button>Cadastrar</button>
        </div>
        <div className={style.imageTable}>
          <img src={TableImg} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Table;