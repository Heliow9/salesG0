import './App.css';
import React, { useState } from 'react';
import NavBar from './pages/components/navbar'
import Home from './pages/Home'
import Table from './pages/Table'
import FoodItens from './pages/FoodItens'
import { Switch, Route } from 'react-router-dom'
import TableItem from './pages/components/tableItem'
import CommandItem from './pages/components/commandItem';
import { ConsumptionContext } from './contexts/consumptionContext';
import Noselected from './pages/components/noSelected';

function App() {

  const { consumption, TableValue, setTableValue } = React.useContext(ConsumptionContext);
  const [valueItens, setValueItens] = useState('')


  const [tables, setTables] = useState([{
    id: 1,
    value: 1,
    date: '13:00',
    consumption: [
      {
        id: 1,
        itemName: 'Garangueijo',
        value: 20,
      },
      {
        id: 2,
        itemName: 'Arrumadinho C/S',
        value: 1000,
      },
      {
        id: 3,
        itemName: 'Garangueijo',
        value: 2,
      },
      {
        id: 4,
        itemName: 'Arrumadinho C/S',
        value: 3,
      }, {
        id: 5,
        itemName: 'Garangueijo',
        value: 2,
      },
      {
        id: 4,
        itemName: 'Arrumadinho C/S',
        value: 3,
      },
      {
        id: 5,
        itemName: 'Arrumadinho C/S',
        value: 3,
      },
      {
        id: 6,
        itemName: 'Arrumadinho C/S',
        value: 3,
      },
      {
        id: 7,
        itemName: 'Arrumadinho C/S',
        value: 3,
      },

      {
        id: 8,
        itemName: 'Arrumadinho C/S',
        value: 10,
      },
      {
        id: 9,
        itemName: 'Arrumadinho C/S',
        value: 10,
      },

      {
        id: 10,
        itemName: 'Arrumadinho C/S',
        value: 10,
      }
      ,

      {
        id: 11,
        itemName: 'Arrumadinho C/S',
        value: 12,
      }
    ]

  },
  {
    id: 2,
    value: 2,
    date: '13:00'

  }
    ,
  {
    id: 3,
    value: 3,
    date: '13:00',
    consumption: [
      {
        id: 1,
        itemName: 'Garangueijo',
        value: 20,
      },
      {
        id: 2,
        itemName: 'Arrumadinho C/S',
        value: 220.50,
      }
    ]
  }
    ,
  {
    id: 4,
    value: 4,
    date: '13:00'
  }
    ,
  {
    id: 5,
    value: 5,
    date: '13:00',
    consumption: [
      {
        id: 1,
        itemName: 'Garangueijo',
        value: 80,
      },
      {
        id: 2,
        itemName: 'Arrumadinho C/S',
        value: 3,
      },

    ]
  }
    ,
  {
    id: 6,
    value: 6,
    date: '13:00'
  }
  ]);
  function handlerRealValue(valor) {
    const valorREAL = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorREAL;
  }

  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <div className="dashboard">
          <h3>Dashboard - <span>G0Sale</span> </h3>
          <div className="searchInput">
            <label htmlFor="search">Buscar:</label>
            <input type="search" name="search" id="search" placeholder="search" />
          </div>
        </div>


        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/tables" ><Table /></Route>
          <Route path="/food" ><FoodItens /></Route>

        </Switch>

        <div className="tables">
          <span>Mesas Ativas</span>
          <div className="tableList">

            {
              tables.map((item, key) => (
                <TableItem data={item} key={key} />
              ))
            }
          </div>
        </div>

      </div>
      <div className="command">
        {
          !consumption ? <Noselected /> : <>
            <div className="command_itens">
              <div className="currentItens">
                <h3>Lista de Pedidos</h3>
                {

                  consumption ? consumption.map((item, key) => (
                    item.map((item, key) => (
                      <CommandItem data={item} key={key} />

                    ))
                  )) : null
                }
              </div>
            </div>
            <div className="result">
              <h3>Total:</h3>
              <h2>{TableValue ? handlerRealValue(TableValue) : null}</h2>
            </div>
          </>
        }

      </div>

    </div>
  );
}

export default App;
