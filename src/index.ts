import express from 'express';
import { PORT } from './config/config';
import userRoute from './routes/user.route';
import dotenv from 'dotenv';
import connectDB from './config/db';
 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoute);

dotenv.config();
connectDB();

app.get('/', (req,res) => {
    const name = "Hello World"
    console.log(name)
    res.send(`<p>${name}</p>`)
  });

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});



