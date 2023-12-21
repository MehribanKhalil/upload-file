import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import userRouter from './src/routes/user.js'

config();
const app = express();
app.use(json());
app.use(cors());
app.use(express.static("src/public"));


app.use('/users',userRouter)



const PORT = process.env.PORT;
const url = process.env.CONNECTION_URL.replace(
  "<password>",
  process.env.PASSWORD
);

connect(url).catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log("Server is running");
});
