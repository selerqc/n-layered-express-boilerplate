import mongoose from 'mongoose';
import { MONGO_URI } from '../../config/env.js';

export const connectDB = () => mongoose.connect(MONGO_URI);
