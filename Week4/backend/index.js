const express=require('express');
const app=express();
const port=3000;
const cors=require('cors');
app.use(cors());
app.get('/sum',(req,res)=>{
  const a=parseInt(req.query.a);
  const b=parseInt(req.query.b);
  res.send({result:a+b});  
})
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})