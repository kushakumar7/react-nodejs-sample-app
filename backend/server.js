const express=require('express');
const cors=require('cors');
require('dotenv').config();

const app=express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
 res.json({message:'Backend Running Successfully'});
});

app.get('/api/users',(req,res)=>{
 res.json([
  {id:1,name:'John'},
  {id:2,name:'David'},
  {id:3,name:'Kusha'}
 ]);
});

app.listen(process.env.PORT || 3000);
