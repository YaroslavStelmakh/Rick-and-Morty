import React from "react";
import {BrowserRouter} from "react-router-dom";

import './App.css';
import {useRoutes} from "./components/routes";
import {Nav} from "./components/Navigation/Nav";


function App() {
    const routes = useRoutes();
  return (
    <BrowserRouter>
        <div className="App">
            < Nav />
            {routes}
        </div>
    </BrowserRouter>
  );
}

export default App;
