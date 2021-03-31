const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const Buy_Book = "Buy_Book";

const bookInitialState = {
  numberOfBooks: 10,
  numberOfBookSold: 0,
};
const penInitialState = {
  numberOfPens: 20,
  numberOfPensSold: 0,
};

function buyBook() {
  return {
    type: Buy_Book,
    payload: "Book Records",
  };
}
function buyPen() {
  return {
    type: "Buy_Pen",
    payload: "Pen Records",
  };
}

const BookReducer = (state = bookInitialState, action) => {
  switch (action.type) {
    case "Buy_Book":
      return {
        ...state,
        numberOfBooks: state.numberOfBooks - 1,
        numberOfBookSold: state.numberOfBookSold + 1,
      };
    default:
      return state;
  }
};
const PenReducer = (state = penInitialState, action) => {
  switch (action.type) {
    case "Buy_Pen":
      return {
        ...state,
        numberOfPens: state.numberOfPens - 1,
        numberOfPensSold: state.numberOfPensSold + 1,
      };
    default:
      return state;
  }
};

const Reducer = combineReducers({
  Book: BookReducer,
  Pen: PenReducer,
});

const logger = (store) => (next) => (action) => {
  console.log("Logged Action: ", action);
  next(action);
};

const store = createStore(Reducer, applyMiddleware(logger));
console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State Value ", store.getState());
});
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
unsubscribe();
