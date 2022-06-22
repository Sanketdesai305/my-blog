import {Link} from "react-router-dom";
import React from "react";
function ArticleList({ articles }) {
    return(
        <>
    {
        articles.map((article, key) => (
            <Link className="article" key={key} to={`/article/${article.name}`}>
                <h2>{article.title}</h2>
                <p className="articless">{article.content[0].substring(0, 150)}...</p>
            </Link>
        ))
    }
        </>
    )
}
export default ArticleList;