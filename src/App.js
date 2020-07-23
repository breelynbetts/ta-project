import React from "react";
import Routing from "./Routing";
import SearchLocation from './components/SearchLocation.jsx/SearchLocation'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
     <Routing />
      <header className="App-header">
        <SearchLocation />
      </header>

    </div>
  )
}

export default App
