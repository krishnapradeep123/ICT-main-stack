const express = require('express');// to build backend quickly
const app = express();//license of express
const cors = require("cors");// to cors orginal policies
const PORT = 8745

app.use(cors());

require('./dB')//mongodb connection folder iscalled here

app.listen(PORT,()=>{
    console.log(`server is runnind on port ${PORT}`)
}

)