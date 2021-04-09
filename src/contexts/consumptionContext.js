import React, { createContext, useState } from 'react';

export const ConsumptionContext = createContext({});


export const ConsumptionProvider = (props) => {

  const [consumption, setConsumption] = useState()
  return (
    <ConsumptionContext.Provider value={{ consumption, setConsumption }} >
      {props.children}
    </ConsumptionContext.Provider>
  )
}
