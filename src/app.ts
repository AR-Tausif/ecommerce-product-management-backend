import express, { ErrorRequestHandler } from "express";
import cors from "cors";
import appRoutes from "./app/routes";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", appRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((err, req, res, next) => {
  res.status(404).json({
    success: false,
    message: err.message,
  });
});
export default app;
