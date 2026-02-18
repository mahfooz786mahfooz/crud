const express=require('express');
const app= express();
app.use(express.json());
const students = [
   { id:1,name :"sohit",
    email :"sohit@gmail.com",
    add:"marhaurah",
    moblile:"74810594822"} 
  ];

  app.post('/hhhs',(req,res)=>{
    const student = {
      id:students.length+1,
      email:req.body.email,
      add:req.body.add,
      moblile:req.body.moblile
    }
    students.push(student);
    res.status(201).json({
      message : " new add successfully",
      data :student
    })
  
  })
app.get('/hhh',(request,response)=>{
  response.status(200).json({
    message :"data is ok",
    data:students


  });
});
app.listen(3000,()=>{
  console.log("server is running");
})