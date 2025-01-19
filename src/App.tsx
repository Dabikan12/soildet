import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import ResearchPage from "./pages/research-page/ResearchPage";
import ResultPage from "./pages/result-page/ResultPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/research" element={<ResearchPage/>}/>
            <Route path="/result" element={<ResultPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
