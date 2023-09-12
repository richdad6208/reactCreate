"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
main().catch((err) => console.log(err));
async function main() {
    if (typeof process.env.DB_URL === "string")
        await mongoose_1.default.connect(process.env.DB_URL);
    console.log("DB ON🌍");
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
