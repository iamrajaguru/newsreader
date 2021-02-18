import { Provider } from "react-redux";
import React from "react";
import store, { history } from "./Store";
import  RouteComponent from "./Components/RouterComponent";
import { ConnectedRouter } from "connected-react-router";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <RouteComponent />
        </ConnectedRouter>
      </Provider>
    </div>
  );
}

export default App;
