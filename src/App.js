import './App.css';
import React, { useState } from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import TableChartRoundedIcon from '@material-ui/icons/TableChartRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import CardItem from './pages/components/cardapioItem'
import TableItem from './pages/components/tableItem'
import { ConsumptionContext } from './contexts/consumptionContext';
function App() {
  const { consumption } = React.useContext(ConsumptionContext);



  const [ComandList, setComandList] = useState([

    {
      id: 1,
      itemName: 'Garangueijo',
      imgUrl: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-caranguejo-1200x774.jpg',
      price: '2.50'
    },
    {
      id: 2,
      itemName: 'Linguiça na Brasa',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiCDTErzCt3v7PYWlbVlyJjxXoDoG_XGX8A&usqp=CAU',
      price: '22.30'
    },
    {
      id: 3,
      itemName: 'Maminha - Arroz',
      imgUrl: 'https://cdn.guiadacozinha.com.br/wp-content/uploads/2019/10/bife-de-maminha-arroz-ervas.jpg',
      price: '3.30'
    },
    {
      id: 4,
      itemName: 'Coca-lata',
      imgUrl: 'https://oitalia.com.br/wp-content/uploads/2019/11/COCA-COLA-LATA.jpeg',
      price: '2.50'
    },
    {
      id: 5,
      itemName: 'Garangueijo',
      imgUrl: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-caranguejo-1200x774.jpg',
      price: '2.30'
    },
    {
      id: 6,
      itemName: 'Arrumadinho C/S',
      imgUrl: 'https://s2.glbimg.com/VFLq1ZSGI8NjvCuR92SLicMUufQ=/0x0:418x288/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/11/52/634/Arrumadinho.jpg',
      price: '18.50'
    },
    {
      id: 7,
      itemName: 'Garangueijo',
      imgUrl: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-caranguejo-1200x774.jpg',
      price: '2.30'
    },
    {
      id: 8,
      itemName: 'Garangueijo',
      imgUrl: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-caranguejo-1200x774.jpg',
      price: '2.30'
    },
    {
      id: 9,
      itemName: 'Garangueijo',
      imgUrl: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-caranguejo-1200x774.jpg',
      price: '2.30'
    },
    {
      id: 10,
      itemName: 'Garangueijo',
      imgUrl: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-caranguejo-1200x774.jpg',
      price: '2.30'
    },
    {
      id: 11,
      itemName: 'Garangueijo',
      imgUrl: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-caranguejo-1200x774.jpg',
      price: '2.30'
    },
  ]);

  const [tables, setTables] = useState([{
    id: 1,
    value: 1,
    date: '13:00',
    consumption: {
      1: {
        id: 11,
        itemName: 'Garangueijo',
      },
      2: {
        id: 6,
        itemName: 'Arrumadinho C/S',
      }
    }
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
    consumption: {
      1: {
        id: 11,
        itemName: 'Garangueijo',
      },
      2: {
        id: 6,
        itemName: 'Arrumadinho C/S',
      }
    }
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
    date: '13:00'
  }
    ,
  {
    id: 6,
    value: 6,
    date: '13:00'
  }
  ]);

  React.useEffect(() => {

  }, [])


  return (
    <div className="container">
      <div className="nav">
        <div className="navItens">
          <div className="Menuitem"><HomeRoundedIcon fontSize='large' /></div>
          <div className="Menuitem"><TableChartRoundedIcon fontSize='large' /></div>
          <div className="Menuitem"><AccountBalanceWalletRoundedIcon fontSize='large' /></div>
          <div className="Menuitem"><SettingsApplicationsRoundedIcon fontSize='large' /></div>
          <ExitToAppRoundedIcon className="logoutbottom" fontSize='large' style={{ color: 'white', position: 'relative', top: 38 }} />
        </div>
      </div>
      <div className="content">
        <div className="dashboard">
          <h3>Dashboard - <span>G0Sale</span> </h3>
          <div className="searchInput">
            <label htmlFor="search">Buscar:</label>
            <input type="search" name="search" id="search" placeholder="search" />
          </div>
        </div>

        <div className="saleItens">
          {ComandList.map((item, key) => (
            <CardItem data={item} key={key} />
          ))}
        </div>
        <div className="tables">
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
      
      </div>
    </div>
  );
}

export default App;
