const redux = require("redux");
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");
const createStore = redux.createStore;

const initialState = {
  isLoading: false,
  users: [],
  error: "",
};

const USER_REQUEST = "USER_REQUEST";
const USER_SUCCESS = "USER_SUCCESS";
const USER_ERROR = "USER_ERROR";

const userRequest = () => {
  return { type: USER_REQUEST };
};

const userSuccess = (users) => {
  return { type: USER_SUCCESS, payload: users };
};

const userError = (error) => {
  return { type: USER_ERROR, payload: error };
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_REQUEST":
      return { ...state, isLoading: true, error: "" };
    case "USER_SUCCESS":
      return {
        isLoading: false,
        users: action.payload,
      };
    case "USER_ERROR":
      return {
        isLoading: false,
        users: [],
        error: action.payload,
      };
  }
};

const fetchUser = () => {
  return function (dispatch) {
    dispatch(userRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => user.name);
        dispatch(userSuccess(users));
      })
      .catch((error) => dispatch(userError(error.message)));
  };
};

const store = createStore(Reducer, applyMiddleware(thunkMiddleware));
const unsubscribe = store.subscribe(() => {
  console.log("Initial State: ", store.getState());
});
store.dispatch(fetchUser());
