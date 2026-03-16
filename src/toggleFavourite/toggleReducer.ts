interface Action {
  type: "TOGGLE_FAVOURITE";
  payload: string;
}

const toggleReducer = (state: string[], action: Action) => {
  switch (action.type) {
    case "TOGGLE_FAVOURITE":
      return state.includes(action.payload)
        ? state.filter((s) => action.payload !== s)
        : [...state, action.payload];
    default:
      return state;
  }
};

export default toggleReducer;
