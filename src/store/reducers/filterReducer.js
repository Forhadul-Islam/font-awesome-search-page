//Initial state
export const initialState = {
  selectedFilters: [],
  selectedStyles: [],
};

//reducer
export const filterReducer = (state, action) => {
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
    case "ADD_STYLE":
      return {
        ...state,
        selectedStyles: [...state.selectedStyles, action.payload],
      };
    case "REMOVE_STYLE":
      return {
        ...state,
        selectedStyles: state.selectedStyles.filter(
          (filter) => filter !== action.payload
        ),
      };

    default:
      return state;
  }
};
