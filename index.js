import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';


const app = express();
dotenv.config();


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB!')
}).catch((error) => {
    console.log(error)
})

export default app;