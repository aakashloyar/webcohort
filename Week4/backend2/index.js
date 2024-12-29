const express=require('express');
const app=express();
const port =3001;
const cors=require('cors');
const { default: mongoose } = require('mongoose');
app.use(cors());
app.use(express.json());
const mongo="mongodb://localhost:27017/notesdb";
const Note=require('./db/index');
app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.post('/add',async (req,res)=>{
    const title=req.body.title;
    const description=req.body.description;
    const note=new Note({
        title,
        description
    })
    console.log(note);
    try {        
        await note.save()
        res.send({message:"Note added successfully"});
    } catch(err) {
        res.send({err});
    }
   
})
app.get('/notes',async (req,res)=>{
    const notes=await Note.find();
    res.send(notes);
})
mongoose.connect(mongo);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})