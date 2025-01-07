import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import ResultsPage from "./pages/results/ResultsPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/results" element={<ResultsPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
