"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
require("./db");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/api", (req, res) => {
    res.status(200).json({ success: true, jaesung: "success" });
});
app.listen(port, () => {
    console.log(`SERVER ON 🌎 ${port}`);
});