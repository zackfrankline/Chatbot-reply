const express=require("express")
const bodyParser=require("body-parser")
const cors=require("cors")


const port= process.env.PORT || 3500

const app=express();

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

require("./routes/df-routes.js")(app)

app.get("/dialogflow/server",(req,res)=>{
    res.send("kaim cho !")
})




app.listen(port,()=>{
    console.log("server running ")
})