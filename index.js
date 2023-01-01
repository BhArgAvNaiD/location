const express = require('express');
const app = express();
const path = require("path");
const templatepath = path.join(__dirname + "/template/views");

const PORT = process.env.PORT || 3000;

app.set("view engine", "hbs");
app.set("views", templatepath);

app.get('/',(req,res)=>{
    res.render('index');
});


app.listen(PORT,()=>{
    console.log(`Server running on port: http://localhost:${PORT}`);
})