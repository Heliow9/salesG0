import React from 'react';
import { ConsumptionContext } from '../../contexts/consumptionContext';

// import { Container } from './styles';

function TableItem({ data }) {

  const { setConsumption, setTableValue } = React.useContext(ConsumptionContext);

  const handlerSetconsumption = () => {
    const { consumption } = data;

    let somar = 0;

    if (data.consumption) {

      setConsumption([data.consumption])

      for (let index = 0; index < consumption.length; index++) {

        somar += consumption[index].value
      }
      setTableValue(somar)
    }
  }

  return (
    <div className="tableItem" key={data.id} onClick={handlerSetconsumption} >
      <div className="tableInfor">
        <div className="number">{data.value}</div>

      </div>
      <div className="tableDate">
        Aberta: 13:30
    </div>
    </div>
  )
}

export default TableItem;