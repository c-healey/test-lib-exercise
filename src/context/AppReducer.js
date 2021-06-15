export default function appReducer(state, action) {
  switch (action.type) {
    case "FETCH_CUSTOMER":
      return {
        ...state,
        customer: action.payload,
      };

    default:
      return state;
  }
}
