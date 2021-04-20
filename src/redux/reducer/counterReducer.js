const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  // if (action.type === "INCREASE") {
  //   state.count += action.payload;
  // }

  switch (action.type) {
    case "INCREASE":
      state.count += action.payload;
      break;
    case "DECREASE":
      state.count -= action.payload;
      break;
    default:
      break;
  }
  console.log("state: ", state);
  return { ...state };
};

export default counterReducer;
