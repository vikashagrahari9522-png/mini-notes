const express = require('express')
const app = express()

app.use(express.json()) //middleware


let notes = []

app.post("/notes",(req,res)=>{
    console.log(req.body);
    notes.push(req.body)
    res.json({
        message:"notes added succesfully",
        notes:notes
    })
})


app.get('/notes',(req,res)=>{
    res.json(notes)
})

app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index
    delete notes[index]
    res.json({
        message:"notes deleted successfully"
    })
})

app.patch('/notes/:index',(req,res)=>{
    const index=req.params.index
    const {title} =req.body

    notes[index].title=title
    

    res.json({
        message:'notes updated successfully'
    })
})

app.listen(4500,()=>{
    console.log("server is running on port 4500");
    
})