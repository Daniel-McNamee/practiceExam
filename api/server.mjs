import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import posts from './routes/posts.mjs';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

// Routes
app.use('/items', posts);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});