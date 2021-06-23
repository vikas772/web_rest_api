const express = require("express");
const validator = require("validator");
require("./database/conn");
const Studnet = require("./models/students");
const port = process.env.port || 3000;
const studentRouter = require("./routers/stud_router");
const app = express();
app.use(express.json());
app.use(studentRouter);


//create a new Router
//const router = new express.Router();

// we need to define the router
/*router.get("/vikas", (req, res) => {

}); */

// we need to register the router

//app.use(router);

//create a new students



app.listen(port, ()=>
{
    console.log(`conection is setup at ${port}`);
})