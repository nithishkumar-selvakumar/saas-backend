import Koa from "koa";
import { koaBody } from "koa-body";
import json from "koa-json";
import dotenv from "dotenv";
import sequelize from "./src/config/db.js";
import errorHandler from "./src/middleware/errorHandler.js";
import userRoutes from "./src/routes/userRoute.js";

dotenv.config();
const PORT = process.env.PORT || 8001;

const app = new Koa();

app.use(errorHandler);
app.use(koaBody());
app.use(json());

app.use(userRoutes.routes()).use(userRoutes.allowedMethods());

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
