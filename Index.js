const express = require('express');
const app = express();
const port = 8000;
const person = require('./database');

app.get('/',(req,res)=>{

  console.log("hello laturkar");
  res.json({msg: 'success'})
  })




const personData = require('./Routes/personData');
app.use('/person',personData);


app.listen(port,()=>{
  console.log("server started at port:",port);
})


// commit added