const mongoose =require("mongoose");
// define mongodb connection url
const  mongoURL="mongodb://127.0.0.1:27017/hotel"
//set up mongo DB connection 
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,

})
//get default connection 
//mongoose maintains a default connection object representing the mongo db connection
const db=mongoose.connection;
// define event listeners for database connection 
db.on("connected",()=>{
    console.log("mongodb connected");

});
db.on ("error",(err)=>{
 console.log("mongodb connected error",err);

});

db.on ("disconnected",()=>{
    console.log("mongodb disconnected");
   
   });
   // export database connection

module.exports=db;