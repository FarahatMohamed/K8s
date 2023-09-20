import express from 'express'
import os from 'os'

const app= express()
const PORT =3000

app.get("/",(req,res)=>{
    const message =`hello world,version 2 I am Pod ${os.hostname()}`
    res.send(message)
})

app.listen(PORT,()=>{
    console.log(`Web Server is listen at port ${PORT}`)
    console.log(os.hostname())
})