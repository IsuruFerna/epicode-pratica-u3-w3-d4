import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComp from "./components/NavBarComp";
import Articles from "./components/Articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleDetails from "./components/ArticleDetails";

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <header className="App-header">
               <NavBarComp />
            </header>
            <Routes>
               <Route path="/" element={<Articles />} />
               <Route path="article/:id" element={<ArticleDetails />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
