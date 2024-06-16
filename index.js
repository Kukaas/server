import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';


const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB!')
}).catch((error) => {
    console.log(error)
})

app.use('/api/v1/user', userRoutes)
app.use('/api/v1/auth', authRoutes)

export default app;