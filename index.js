const express=require("express")

const app=express();
const cors=require("cors")
 const mysql=require("mysql")
const port= process.env.PORT || 4001;
const db = mysql.createPool({
    
    user:"b8c51076aeb231",
    host:"us-cdbr-east-04.cleardb.com",
    password:"18c0a860", 
    database:"heroku_1be09236bfc8720"
});
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.post("/create",(req,res)=>{
    const name=req.body.name;
    const accno=req.body.accno;  
    const password=req.body.password;
    const rfcode=req.body.rfcode;
    db.query('INSERT INTO employees (name,accno,password,rfcode)VALUES(?,?,?,?)',[name,accno,password,rfcode],(err,result)=>{
        if(err){
            console.log(result);
        }else{
            res.send("Value in  serted");
        }
    })

})
app.get("/employee",(req,res)=>{
  
    db.query("SELECT * FROM employees",(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
    })
 app.listen(  port ,()=>{
    console.log(`Yey Server is running on ${port}`);
}) 
