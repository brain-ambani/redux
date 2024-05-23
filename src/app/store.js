import configureStore from "react-redux";
import cakeReducer from "../features/cake/cakeSlice";

const store = configureStore({
  // preloadedState
  reducer: {
    cake: cakeReducer,
  },
});

export default store;
