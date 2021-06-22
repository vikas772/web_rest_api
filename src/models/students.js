const mongoose = require("mongoose");
const validator = require("validator");

const StudnetSchema = new mongoose.Schema({
    name : {
        type :String,
        required : true,
        minlenght : 3
    },
    email : {
        type : String,
        required : true,
        unique : [true, "Email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")

            }
        }
    },
    phone : {
        type : Number,
        min : 10,
        unique : true,
        required : true
    },
    add : {
        type : String,
        required : true
    }
})

//we will create collection

const Student = new mongoose.model('Student', StudnetSchema);
module.exports = Student;