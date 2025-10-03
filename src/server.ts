import { Server } from "http";
import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";
let server: Server;

const main = async () => {
  try {
    // database connection
    await mongoose
      .connect(config.db_connection_ser as string)
      .then(() => {
        console.log("db connection successfully");
      })
      .catch((err) => {
        console.log("db connection field");
      });
    server = app.listen(config.port, () => {
      console.log(`app is listening port ${config.port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

// main function call
main();
