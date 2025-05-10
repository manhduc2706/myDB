import express from 'express';
import { PORT } from './config/config';
import userRoute from './routes/user.route';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source'; // Import data source từ TypeORM

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Thiết lập kết nối SQL Server
dotenv.config();

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    
    app.use("/api", userRoute); // Đảm bảo các routes sử dụng API đã cấu hình

    app.get('/', (req, res) => {
      const name = "Hello World";
      console.log(name);
      res.send(`<p>${name}</p>`);
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error during Data Source initialization:", error);
  });
