import React, { createContext, useReducer } from "react";

import appReducer from "./AppReducer";

const initialState = {
  customer: {name:'Sam'},
  
   
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const fetchCustomer=(customer)=> {
    dispatch({
      type: "FETCH_CUSTOMER",
      payload: customer,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        customer: state.customer,
        fetchCustomer
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
