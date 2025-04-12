const express=require("express")
const router=express.Router()
const {generateEmailController}=require("../controllers/aiController")


router.post("/email",generateEmailController)


module.exports=router