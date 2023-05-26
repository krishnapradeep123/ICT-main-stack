const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://krishnapradeep:Pskv123@cluster0.gp7csk5.mongodb.net/product')
    .then(() => {
        console.log("DB connected")
    })
    .catch(err => {
        console.log(err)
    })
