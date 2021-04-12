import React, { createContext, useState } from 'react';

export const ConsumptionContext = createContext({});


export const ConsumptionProvider = (props) => {

  const [consumption, setConsumption] = useState()
  const [TableValue, setTableValue] = useState()
  return (
    <ConsumptionContext.Provider value={{ consumption, setConsumption, TableValue, setTableValue, }} >
      {props.children}
    </ConsumptionContext.Provider>
  )
}
