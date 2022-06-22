import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import articles from './Article-Content';
import "../App.css";
import ArticleList from "../components/ArticleList";
import NotFound from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import UpvoteSection from "../components/UpvoteSection";
import AddCommentForm from "../components/AddCommentForm";

const ArticlesPage = ()=>{
    const {name }= useParams();
    const article = articles.find(article=>article.name === name);
    const [articlesInfo,setArticleInfo] = useState({upvotes:0,comments:[]})

    useEffect(() => {
        const fetchData = async()=>{
            const result = await fetch(`/api/articles/${name}`)
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        }
        fetchData();
      },[name])

    if(!article) return <NotFound/>
    const otherArticles= articles.filter(article=>article.name !== name);
    return(
    <>
    <h1 > {article.title}</h1>
    <UpvoteSection articleName={name} upvotes={articlesInfo.upvotes} setArticleInfo={setArticleInfo}/>
    
    {article.content.map((paragraph,key)=>(
        <p key={key}>{paragraph}</p>
        
    ))}
    <CommentsList comments={articlesInfo.comments}/>
    <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
    <h2 className="other-articles">Other Articles</h2>
    <ArticleList articles ={otherArticles}/>
    </>
    );
}
export default ArticlesPage;