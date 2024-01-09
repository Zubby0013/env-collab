import { Application, Request, Response } from "express";
// import auth from "./router/userRouter";

export const mainApp = (app: Application) => {
  try {
    // app.use("/api",auth)
    app.get("/", (req: Request, res: Response) => {
      try {
        // console.log(req)
        return res.status(200).json({
          message: "Welcome to product API",
        });
      } catch (error) {
        return res.status(404).json({
          message: "Error",
        });
      }
    });
  } catch (error) {
    return error;
  }
};
