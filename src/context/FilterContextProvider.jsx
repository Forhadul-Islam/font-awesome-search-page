/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

//Initial state
const initialState = {
  selectedFilters: [],
  selectedStyles: [],
  selectedFeatured: [],
};

//reducer
const filterReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FILTER":
      return {
        ...state,
        selectedFilters: [...state.selectedFilters, action.payload],
      };
    case "REMOVE_FILTER":
      return {
        ...state,
        selectedFilters: state.selectedFilters.filter(
          (filter) => filter !== action.payload
        ),
      };

    default:
      return state;
  }
};

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
