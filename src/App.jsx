import { Provider } from "react-redux";
import loja from "./redux/loja/loja";
import React from "react";
import ReactDOM from "react-dom";
import RoutesApp from "./routes/routes";
import "./styles/main.css";

function App() {
  return (
    <React.StrictMode>
      <Provider store={loja}>
        <RoutesApp />
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
