const express=require('express');
const app= express();
app.use(express.json());

const students = [
   { id:1,name :"mahfooz",
    email :"mahfooz2563@gmail.com",
    add:"amnour",
    moblile:"7400000022"} ,

      { id:2,name :"Ankit",
    email :"ankit@gmail.com",
    add:"amnour",
    moblile:"7400000022"} ,

      { id:3,name :"Raman",
    email :"raman@gmail.com",
    add:"amnour",
    moblile:"7400000022"} ,
   { id:4,name :"akram",
    email :"akram563@gmail.com",
    add:"amnour",
    moblile:"7400000022"} ,

      { id:5,name :"manjit",
    email :"amnjit@gmail.com",
    add:"amnour",
    moblile:"7400000022"} ,

      { id:6,name :"Rohan",
    email :"rohan@gmail.com",
    add:"amnour",
    moblile:"7400000022"} 
  ];

  app.post('/addStudent',(req,res)=>{
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
app.get('/allStudents',(request,response)=>{
  response.status(200).json({
    message :"data is ok",
    data:students


  });
});

/// Delete Srudent By Id
app.delete('/deleteStudent/id/:id',(request,respnse)=>{
const sId=parseInt(request.params.id);
const sqlQ="DELETE FROM students WHERE id=?";

db.query(sqlQ,[sId],(error,result)=>{
   if(error){
            response.status(500).json({message:"Server internal Errors:"+error})
        }
        if(result.affectedRows===0){

 respnse.status(404).json({
        message:"Student Not Found"
    }) 

        }
        else{
            
 respnse.status(201).json({
        message:"Student Deleted Successfully",
        sId
    }) 
        }

})});

app.listen(3000,()=>{
  console.log("server is running");
})



 
















