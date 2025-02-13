import Koa from "koa";
import Router from "@koa/router";
import { koaBody } from "koa-body";
import json from "koa-json";
import dotenv from "dotenv";
import sequelize from "./src/config/db.js";
import errorHandler from "./src/middleware/errorHandler.js";

dotenv.config();
const PORT = process.env.PORT || 8001;

const app = new Koa();
const router = new Router();

app.use(errorHandler);
app.use(koaBody());
app.use(json());

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL Connected!");
    await sequelize.sync();
    console.log("📦 Database Synced!");

    app.listen(PORT, (err) => {
      if (err) {
        console.error(`❌ Error on server: ${err}`);
      } else {
        console.log(`🚀 Server started on ${PORT}`);
      }
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};

startServer();
