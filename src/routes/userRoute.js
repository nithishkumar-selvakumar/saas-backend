import Router from "@koa/router";
import { createUser } from "../controllers/userController.js";
import { validate } from "../middleware/validate.js";

import { createUserSchema } from "../config/validation.js";

const router = new Router({
  prefix: "/api/users",
});

router.post("/", validate(createUserSchema), createUser);

export default router;
