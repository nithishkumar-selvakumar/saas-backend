import Joi from "joi";
import { USER_ROLES } from "./constant.js";

export const createUserSchema = Joi.object({
  name: Joi.string().min(3).max(40).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 3 characters",
    "string.max": "Name must be at most 50 characters",
  }),

  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
    "string.empty": "Email is required",
  }),
  password: Joi.string().min(6).max(100).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password must be at least 6 characters",
    "string.max": "Password must be at most 100 characters",
  }),
  role: Joi.string()
    .valid(...Object.values(USER_ROLES))
    .default(USER_ROLES.READER)
    .messages({
      "any.only": `Role must be one of: ${Object.values(USER_ROLES).join(
        ", "
      )}`,
    }),
});
