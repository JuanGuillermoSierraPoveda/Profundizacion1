const express=require('express');
const cors=require("cors");
const app=express();
const clasesDeSoftwareSeguro=require("./Rutadesarrolloseguro.js");

app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Subio al servidor y vamos bien")
});

app.use("/Rutadesarrolloseguro", clasesDeSoftwareSeguro);
app.listen (6500,()=>{
    console.log("servidor activo.....")
});
