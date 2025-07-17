const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db_connection");
const Registeration = require("./models/registerationModel");
const Expo = require("./models/exposModel");
const Exhibitor = require("./models/exibitorRegisterationsModel");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
connectDB();

// Multer Configuration (Only ONCE here)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Serve Uploaded Files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// -------------------- Routes --------------------

// Register User
app.post("/register", async (req, res) => {
  const { fullname, email, password, role } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    await Registeration.insertOne({ fullname, email, password: hashPassword, role });
    res.status(200).send({ message: `${role} Registered Successfully` });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Registration Failed" });
  }
});

// Login User
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const registeredUser = await Registeration.findOne({ email: email });

    if (registeredUser) {
      const isMatch = await bcrypt.compare(password, registeredUser.password);
      if (isMatch) {
        res.status(200).send({ message: "Logged in Successfully", registeredUser });
      } else {
        res.status(200).send({ message: "Incorrect Credentials" });
      }
    } else {
      res.status(200).send({ message: "User doesn't exist" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Login Failed" });
  }
});

// Add Expo
app.post("/addexpo", async (req, res) => {
  const { title, date, location, description, theme } = req.body;
  try {
    await Expo.insertOne({
      title,
      date,
      location,
      description,
      theme,
    });
    res.status(200).send({ message: "Expo Added Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Failed to Add Expo" });
  }
});

// Get All Expos
app.get("/getexpos", async (req, res) => {
  try {
    const expos = await Expo.find();
    res.status(200).send({ expos: expos });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Failed to Fetch Expos" });
  }
});

// Delete Expo
app.delete("/deleteexpo/:id", async (req, res) => {
  try {
    await Expo.deleteOne({ _id: req.params.id });
    res.status(200).send({ message: "Expo deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Failed to Delete Expo" });
  }
});

// Update Expo
app.put("/updateexpo/:id", async (req, res) => {
  const { title, date, location, description, theme } = req.body;
  try {
    await Expo.updateOne(
      { _id: req.params.id },
      { title, date, location, description, theme }
    );
    res.status(200).send({ message: "Expo updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Failed to Update Expo" });
  }
});

// Register Exhibitor with Document Upload
app.post("/register-exhibitor", upload.single("documents"), async (req, res) => {
  const { companyName, contactPerson, email, phone } = req.body;
  const documentPath = req.file ? req.file.path : null;

  if (!companyName || !contactPerson || !email || !phone || !documentPath) {
    return res.status(400).send({ message: "All fields are required" });
  }

  try {
    const newExhibitor = new Exhibitor({
      companyName,
      contactPerson,
      email,
      phone,
      documentPath,
    });

    await newExhibitor.save();
    res.status(201).send({ message: "Exhibitor registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server error" });
  }
});

// -------------------- Server --------------------
app.listen(2000, () => {
  console.log("Server started on http://localhost:2000");
});
