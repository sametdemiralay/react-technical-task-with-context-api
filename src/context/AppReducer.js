export default (state, action) => {
  switch (action.type) {
    case 'GET_ALL_INITIAL_DATA':
      return {
        ...state,
        allData: [...action.payload]
      };
      case 'LOADING_HANDLE':
      return {
        ...state,
        isLoading: action.payload
      };
      case 'ERROR_HANDLE':
      return {
        ...state,
        isError: action.payload
      };
    default:
      return state;
  }
};
