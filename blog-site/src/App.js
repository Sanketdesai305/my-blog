import React from "react";
import HomePage from './pages/HomePage.js';
import ArticlePage from "./pages/ArticlePage.js";
import ArticleListPage from "./pages/ArticlesListPage.js";
import AboutPage from "./pages/AboutPage.js";
import NavBar from "./NavBar.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
function App() {
  return (
    <Router>
    <NavBar/>
    <Routes>
      <Route  path="/" element={<HomePage/>} exact />
      <Route  path="/about" element={<AboutPage/>} />
      <Route  path="/article/:name" element={<ArticlePage/>} />
      <Route  path="/article-list" element={<ArticleListPage/>} />
    </Routes>
  </Router>
  );
}

export default App;
