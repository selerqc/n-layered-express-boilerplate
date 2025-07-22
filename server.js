import dotenv from 'dotenv';
import { connectDB } from './infrastructure/db/mongoose.js';
import app from './app.js';

dotenv.config();

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
