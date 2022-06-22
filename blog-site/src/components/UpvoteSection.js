import React from "react";

const UpvoteSection =({articleName,upvotes,setArticleInfo})=>{
    const UpvoteArticle = async()=>{
        const result = await fetch(`/api/articles/${articleName}/upvotes`,{
            method:"post",
        });
        const body = await result.json();
        setArticleInfo(body);
    }
    return(
    <>
        <div id="upvotes-section">
            <button className="b" onClick ={()=>UpvoteArticle()}>Add Upvote</button>
            <p className="p">This Article has been upvotes {upvotes} times</p>
            
        </div>
    </>
    );
}
   
export default UpvoteSection;
