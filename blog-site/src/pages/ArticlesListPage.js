import React from "react";
import articles from "./Article-Content";
import ArticleList from "../components/ArticleList.js";

import "../App.css";

const ArticlesListPage = ()=>{
    return(
    <>
    <h1>Articles</h1>
    <ArticleList articles={articles}/>

    
    </>
    );
}
export default ArticlesListPage;