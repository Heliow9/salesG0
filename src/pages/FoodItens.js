import React from 'react';
import style from './styles/food.module.css'
import TextField from '@material-ui/core/TextField';
// import { Container } from './styles';

function FoodItens() {



  return <div className={style.container}>
    <h3>Cadastrar Item:</h3>
    <div className={style.formfood}>
      <div className={style.inputs}>
        <div className={style.inputGroup}>
          <label htmlFor="itemName">Nome:</label>
          <input type="text" name="itemName" id="itemName" placeholder="Nome do Item" className={style.inputName} />
        </div>
        <div className={style.inputGroup}>
          <label htmlFor="ItemPrice">Preço:</label>
          <input type="text" name="itemPrice" id="itemPrice" placeholder="Preço" className={style.inputPrice} />
        </div>
        <div className={style.buttons} >
          <button>Cadastrar</button>
          <button type="reset" >Limpar</button>
        </div>
      </div>
      <div className={style.fileINputs}>
        teste2
    </div>
    </div>
  </div>
}

export default FoodItens;