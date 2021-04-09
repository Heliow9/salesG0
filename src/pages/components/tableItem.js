import React from 'react';
import { ConsumptionContext } from '../../contexts/consumptionContext';

// import { Container } from './styles';

function TableItem({ data }) {

  const { setConsumption } = React.useContext(ConsumptionContext);

  const handlerSetconsumption = () => {
    if (data.consumption) {
      setConsumption(data.consumption)
    }
  }



  return (
    <div className="tableItem" key={data.id} onClick={handlerSetconsumption} >
      <div className="tableInfor">
        <div className="number">{data.value}</div>
        <div className="value">58,00</div>
      </div>
      <div className="tableDate">
        Aberta: 13:30
    </div>
    </div>
  )
}

export default TableItem;