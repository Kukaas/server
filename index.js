import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import cors from 'cors';


const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

export default app;