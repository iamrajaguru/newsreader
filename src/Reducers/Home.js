const initialState = {
  articles: [],
  current: "home",
  selectedNews: {},
};

const reducerState = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_NEWSLIST":
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};
export default reducerState;
