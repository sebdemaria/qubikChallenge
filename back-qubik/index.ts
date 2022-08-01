/* eslint-disable no-undef */
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { router } from './routes/router';

dotenv.config();

const app = express()

app.use(cors())

app.use(express.static("public"))

app.use("/api/", router)

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`)
})
