import express from 'express'
import os from 'os'

const app= express()
const PORT =3000

app.get("/",(req,res0)=>{
    const message ='hello world, I am pod ${os.hostname()}'
    res0.send(message)
})

app.listen(PORT,()=>{
    console.log('Web Server is listen at port ${PORT}')
    console.log(os.hostname())
})