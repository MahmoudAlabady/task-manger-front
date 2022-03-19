const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist/task-manger'));

app.get('*',(req,res)=>{
    	res.sendFile('index.html',{root:'dist/task-manger/'})
 })
app.listen(process.env.PORT);