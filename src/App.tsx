import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
