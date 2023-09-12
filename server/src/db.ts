import mongoose from "mongoose";

main().catch((err) => console.log(err));

async function main() {
  if (typeof process.env.DB_URL === "string")
    await mongoose.connect(process.env.DB_URL);
  console.log("DB ON🌍");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
