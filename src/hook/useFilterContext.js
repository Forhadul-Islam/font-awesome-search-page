import { useContext } from "react";
import { FilterContext } from "../store/contextProvider/filterContextProvide";

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};
