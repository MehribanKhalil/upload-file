import express, { json } from "express";
import fileUpload from "express-fileupload";
import { connect, Schema } from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import path from "path";
config();
const app = express();
app.use(json());
app.use(cors());
app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.send("hello world");
});

//SINGLE FILE

// app.post("/upload", async (req, res) => {
//   let sampleFile;
//   let uploadPath;

//   if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send("No files were uploaded.");
//   }
//   sampleFile = req.files.test;
//   console.log(__dirname);
//   uploadPath = path.join(__dirname, "src", "public", sampleFile.name);
//   sampleFile.mv(uploadPath, function (err) {
//     if (err) return res.status(500).send(err);

//     res.send("File uploaded!");
//   });

// });


//MULTI FILE
app.post("/upload", async (req, res) => {
  let sampleFile;
  let uploadPath;
  const myFiles = Object.keys(req.files);

  if (!req.files || myFiles.length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  myFiles.forEach((x) => {
    sampleFile = req.files[x];
    uploadPath = path.join(__dirname, "src", "public", sampleFile.name);
    sampleFile.mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);
    });
  });
  res.send("File uploaded!");
});

const PORT = process.env.PORT;
const url = process.env.CONNECTION_URL.replace(
  "<password>",
  process.env.PASSWORD
);

connect(url).catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log("Server is running");
});
