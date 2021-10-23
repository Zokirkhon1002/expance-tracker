function AppReducer(state, action) {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (each) => each.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
        return {
            ...state,
            transactions: [action.payload, ...state.transactions]
        }
    default:
      return state;
  }
}

export default AppReducer;
