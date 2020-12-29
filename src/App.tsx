import * as React from "react";
import "./styles.css";
import { PokedexRoutes } from "./routes/PokedexRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <PokedexRoutes />
    </Provider>
  );
}
