import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes";
import barberRouter from "./routes/barber.routes";

const app = express();
app.use(cors())
app.use(express.json())

app.use(userRouter);
app.use(barberRouter);

export default app;