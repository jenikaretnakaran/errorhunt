const express = require('express'); //installed modules
const path = require ('path'); 
const cors = require('cors');
const bodyParser=require('body-parser');//bodyparser

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');//path changed
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');
// const { dirname } = require('path');

const app = new express();//added () 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 
app.use(cors());//added
app.use(express.static("public",nav));//added

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter);



app.get('/',function(req,res){

    res.render('index',{
        nav //
    });
    
});





app.listen(5000,()=>{
    console.log("Server Ready on 5000");
});