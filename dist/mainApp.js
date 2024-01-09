"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
// import auth from "./router/userRouter";
const mainApp = (app) => {
    try {
        // app.use("/api",auth)
        app.get("/", (req, res) => {
            try {
                // console.log(req)
                return res.status(200).json({
                    message: "Welcome to product API",
                });
            }
            catch (error) {
                return res.status(404).json({
                    message: "Error",
                });
            }
        });
    }
    catch (error) {
        return error;
    }
};
exports.mainApp = mainApp;
