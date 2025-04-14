const mongoose =require ("mongoose");
//  define the person schema 
const personSchema= new mongoose.Schema({
    name: {
        type : String ,
        required : true
           // kiska mtlb name chaiye hi chaiye
    },
    age :{
        type :  Number
    },
    work :{
        type :String,
        enum: ["chef", "manager", "waiter"],
        required: true 

    },
    mobile :{
        type : String ,
        required: true 
        
    },
    email:{
        type : String ,
        required : true ,
        unique: true 
    },
    address: {
        type : String ,
        
    },
    salary:{
        type : Number ,
        required : true 
    }
});
// create person model 
/*const person = mongoose .model("person", personSchema);
module.exports= person ;*/
const Person = mongoose.model("Person", personSchema);
module.exports = Person;