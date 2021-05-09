import { updateObject } from "./utility";

const initState = {
  streams: [{ id: 0 }],
  error: null,
  loading: true,
};

const fetchItemsSuccess = (state, action) => {
  return updateObject(state, {
    streams: action.payload,
    error: null,
    loading: false,
  });
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_STREAMS":
      return fetchItemsSuccess(state, action);
    case "GET_STREAM":
      return action.payload;
    case "GET_CATEGORIES":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
