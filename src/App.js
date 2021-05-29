import React from "react";
//Component --------------------------------------------------------------------------------
import Content from "./Components/Content";
//Redux --------------------------------------------------------------------------------
import store from "./Redux/store";
import { Provider } from "react-redux";
//CSS -----------------------------------------------------------------------------------
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Content />
      </div>
    </Provider>
  );
}

export default App;
