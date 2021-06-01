import "../styles/index.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  createStore,
  applyMiddleware,
  Store,
} from "redux";
import reducer from "../store/reducer";
import { api } from "../services";
import { useEffect } from "react";

function MyApp({Component,pageProps}: AppProps) {
  const store: Store<SpinState, SpinAction> & {
    dispatch: DispatchTypeSpin;
  } = createStore(
    reducer,
    applyMiddleware(thunk)
  );

  //api.get("/api/setLog");
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
