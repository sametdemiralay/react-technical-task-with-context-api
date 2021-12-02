// export default (state, action) => {
//   switch (action.type) {
//     case 'GET_ALL_INITIAL_DATA':
//       return {
//         ...state,
//         allData: [...action.payload]
//       };
//       case 'LOADING_HANDLE':
//       return {
//         ...state,
//         isLoading: action.payload
//       };
//       case 'ERROR_HANDLE':
//       return {
//         ...state,
//         isError: action.payload
//       };
//     default:
//       return state;
//   }
// };
const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        allData: action.payload
        // allData: [...state.allData, action.payload]
      };
    case "GET_DATA_ERROR":
      return {
        loading: false,
        error: "someting went wrong!",
        allData: []
      };
      case "ADD":
        return {
          ...state,
          allData: [...state.allData, action.payload]
        };
    default:
      return state;
  }
};

export default AppReducer;