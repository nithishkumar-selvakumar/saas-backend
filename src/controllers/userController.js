import { registerUser } from "../services/userService.js";

export const createUser = async (ctx) => {
  try {
    const user = await registerUser(ctx.request.body);
    ctx.status = 201;
    ctx.body = { message: "User created successfully", user };
  } catch (error) {
    ctx.status = 400;
    ctx.body = { error: error.message };
  }
};
