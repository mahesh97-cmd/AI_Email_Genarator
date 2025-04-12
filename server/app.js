const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const aiRoute=require("../server/src/routes/aiRoute")
dotenv.config()


const app=express()
app.use(express.json());


app.use(cors())
app.get("/",(req,res)=>{
    res.send("home")
})
app.use("/api/generate",aiRoute)

PORT=process.env.PORT || 3001

app.listen(PORT,()=>{console.log(`app is running on ${PORT}`)})