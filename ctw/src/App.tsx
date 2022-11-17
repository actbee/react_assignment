import React from 'react';
import {RecoilRoot} from "recoil";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/main/main";
import Error from "./components/error";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
       <Routes>
         <Route path = "/" element = {<Main />} />
         <Route element = {<Error />}/>
       </Routes>
     </RecoilRoot>
    </div>
  );
}

export default App;
