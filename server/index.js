const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db_connection");
const Registeration = require("./models/registerationModel");
const Expo = require("./models/exposModel");
const bcrypt = require("bcrypt");
const app = express();

app.use(cors());
app.use(express.json());
connectDB();

app.post("/register", async(request, response) => {
    const { fullname, email, password, role } = request.body;
    try {
        const hashPassword = await bcrypt.hash(password, 10);
        await Registeration.insertOne({fullname, email, password: hashPassword, role});
        response.status(200).send({message: ` ${role} Registered Successfully`});
    }
    catch(err){
        response.status(200).send({message: "Registeration Failed"});
    }
})

app.post("/login", async(request, response) => {
    const { email, password } = request.body;
    try {
        const registeredUser = await Registeration.findOne({email: email});

        if(registeredUser){
            const isMatch = await bcrypt.compare(password, registeredUser.password);
            if(isMatch){
                response.status(200).send({message: "Logged in Successfully", registeredUser});
            }
            else {
                response.status(200).send({message: "Incorrect Credentials"});
            }
        }
        else {
            response.status(200).send({message: "User don't exist"});
        }
        
    }
    catch(err){
        response.status(200).send({message: "Registeration Failed"});
    }
})

app.post("/addexpo", async(request, response) => {
    const {title, date, location, description, theme} = request.body;
    try {
        await Expo.insertOne({
            title,
            date,
            location,
            description,
            theme
        })
        response.status(200).send({message: "Expo Added Successfully"});
    }
    catch(err){
        console.log(err);
    }
})

app.get("/getexpos", async(request, response) => {
    try {
        const expos = await Expo.find();
        response.status(200).send({expos: expos});
    }
    catch(err){
        console.log(err);
    }
})

app.listen(2000, () => {
    console.log("Server started");
})

