const initState = {
  search: "",
  status: "All",
  priorities: [],
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "search/searchFilter":
      return {
        ...state,
        search: action.payload,
      };

    case "search/statusFilter":
      return {
        ...state,
        status: action.payload,
      };

    case "search/prioritiesFilter":
      return {
        ...state,
        priorities: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
