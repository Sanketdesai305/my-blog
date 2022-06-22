import express from "express";
import bodyParser from "body-parser";
import {MongoClient} from "mongodb";
import path from "path";
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'/build')));
app.get('/api/articles/:name', async (req,res)=>{
    try{
        const articleName = req.params.name;
        const client = await MongoClient.connect('mongodb://localhost:27017');
        const db = client.db("my-blog");
        const articlesInfo = await db.collection('articles').findOne({name:articleName});
        res.status(200).json(articlesInfo);
        client.close();
    }catch(error){
        res.status(500).json({message: "error connecting to DB",error});

    }
})

app.post('/api/articles/:name/upvotes',async (req,res)=>{
    try{

        const articleName = req.params.name;
        const client = await MongoClient.connect('mongodb://localhost:27017');
        const db = client.db("my-blog");
        const articlesInfo = await db.collection('articles').findOne({name:articleName});
        await db.collection('articles').updateOne({name:articleName},{
    
            '$set':{
                upvotes:articlesInfo.upvotes+1,
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({name:articleName});
        res.status(200).json(updatedArticleInfo);
        client.close();
    }catch{
        res.status(500).json({message:"error connecting to DB",error});
    }
    });


    
app.post('/api/articles/:name/add-comments',async (req,res)=>{
    try{
        const {userName,text} = req.body;
        const articleName = req.params.name;
        const client = await MongoClient.connect('mongodb://localhost:27017');
        const db = client.db("my-blog");
        const articlesInfo = await db.collection('articles').findOne({name:articleName});
        await db.collection('articles').updateOne({name:articleName},{
    
            '$set':{
                comments:articlesInfo.comments.concat({userName,text}),
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({name:articleName});
        res.status(200).json(updatedArticleInfo);
        client.close();
    }catch{
        res.status(500).json({message:"error connecting to DB",error});
    }
    });

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname+"/build/index.html"));
    })
 
app.listen(5000,()=>{
    console.log("listening on port 5000");
});