const express = require('express');

const router = express.Router();
const bodyparser = require('body-parser');
router.use(bodyparser.json());
const person = require('../database');


router.post('/',async(req,res)=>{
   const data = req.body;
   const newperson = new person(data);
   const result = await newperson.save();

   console.log(result);
   res.json({result:result});
})
router.get('/',async(req,res)=>{
    const result = await person.find(); 
    res.json({result});
})

router.get('/:id',async(req,res)=>{
    const result = await person.findById(req.params.id);
    res.json({result});
})

router.patch('/:id',async(req,res)=>{
     await person.findByIdAndUpdate(req.params.id,{First_Name:'shantabai'});
})


router.delete('/:id',async(req,res)=>{
    await person.findByIdAndDelete(req.params.id);
    res.json({msg:"deleted"});
   
    
})


module.exports = router;