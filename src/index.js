import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";
console.log(`index.js loaded`);
dotenv.config({
  path: './.env', // Correct path for .env file
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(" Error occurred while listening to the app:", error);
      throw error;
    });

    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(` Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(` Error occurred in MongoDB connection: ${err}`);
  });
