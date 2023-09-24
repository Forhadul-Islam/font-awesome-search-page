/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { filterReducer, initialState } from "../reducers/filterReducer";

// Create the FilterContext
export const FilterContext = createContext();

// Create a FilterProvider component to wrap your app with
export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
