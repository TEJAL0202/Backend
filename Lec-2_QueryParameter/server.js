const express=require("express");

const app=express();

// app.get("/profile",(req,res)=>{
    // const {username} =req.query;
    // res.send("profile page of "+" "+username)
// })
// app.get("/profile",(req,res)=>{
    // const {username,age,state} =req.query;
    // res.send("profile page of "+" "+username+ " "+age+" "+state)
// })
let userData=[{
    id:1,
    Name:"Tejal",
    address:"Rajpura"
},
{
    id:2,
    Name:"Simran",
    address:"Pundri"
}]
app.get("/allusers",(req,res)=>{
    res.send(userData);
}) 
app.get("/getuserbyID",(req,res)=>{
    let {id}=req.query;
    for(let i=0;i<usersData.length;i++){
        if(userDate[i].id==id){
            return res.send(userData[i]);
            
        }}
        res.send("user not found");
})
app.get("/deleteusserbyId",(req,res)=>{
    let {id}=req.query;
    for(let i=0;i<userData.length;i++){
        if(userData[i].id==id){
            userData.splice(i,1);
            return res.send(userData);
        }
    }
    res.send("user not found");
})

app.get("/adduser",(req,res)=>{
    let {id,Name,address}=req.query;
    let newUser={
        id:id,
        Name:Name,
        address:address
    }
    userData.push(newUser);
    res.send("New user added");
})
app.listen(4567,()=>{
    console.log("server started");
});
//get request post request difference