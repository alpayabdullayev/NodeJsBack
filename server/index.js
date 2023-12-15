import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import categoryRoutes from "./routes/categoryRoutes.js"
import moviesRoutes from "./routes/moviesRoutes.js"

dotenv.config()

const app = express()


app.use(express.json())
app.use(cors());



const PORT = process.env.PORT
const URL = process.env.CONNECTION_URL.replace(
    "<password>",
    process.env.PASSWORD
  );

mongoose.connect(URL).catch((err) => console.log("Db not connect" + err));

app.use('/categories', categoryRoutes)
app.use('/movies', moviesRoutes)

app.listen(PORT,()=>{
    console.log(`Server Connection ${PORT}`);
})