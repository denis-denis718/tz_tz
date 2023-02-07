import React from "react";
import {Route, Routes} from "react-router-dom";

import Home from "./screens/Home";
import Variables from "./screens/Variables";
import VariableID from "./screens/VariableID";


const App = () => {

  return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/variables" element={<Variables/>}/>
            <Route path="/variables/:variableID" element={<VariableID/>}/>
        </Routes>
  );
};

export default App;






{/*<Route index element={<Variables/>}/>*/}
{/*<Route path=":id" element={<VariableID/>}/>*/}

