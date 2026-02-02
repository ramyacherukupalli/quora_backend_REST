const express=require("express");
const app=express();
const port = process.env.PORT || 8000;
// const port=8000;
const path=require("path");
const { v4 : uuidv4 }= require('uuid');
const methodOverride=require("method-override");


app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
    id:uuidv4() ,
    name:"ramya",
    content:"i love coding haha"
    },
    {
    id:uuidv4() ,
    name:"aditi",
    content:"work is worship hehe"
    },
    {
    id:uuidv4() ,
    name:"ram",
    content:"i love this life ehe"
    }
]

//all posts route
app.get("/posts",(req,res)=>{

    res.render("index.ejs",{posts})
})

//new post form route
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

//new post creation
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let newID=uuidv4() ;
    posts.push({name:username,content,id:newID});
    res.redirect("/posts");

})

//show individual post route
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    if (!post) {
        return res.status(404).send('Post not found');
    }
    console.log(post)
    res.render("show.ejs",{post});

})

//to edit posts
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
     console.log(id);
    console.log(newContent);
   let post=posts.find((p)=>id===p.id);

   post.content=newContent;
   console.log(post)
    res.redirect("/posts");

})

//to get edit form
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    if (!post) {
        return res.status(404).send('Post not found');
    }
    res.render("edit.ejs",{post});

})

//to delete post
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>p.id!==id);
    // res.send("deleted");
    res.redirect("/posts");
});

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})
