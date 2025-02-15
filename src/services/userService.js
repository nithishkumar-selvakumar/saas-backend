import User from "../models/userModal.js";

export const registerUser = async (userData) => {
  try {
    return await User.create(userData);
  } catch (error) {
    throw new Error(JSON.stringify(error.errors) || "Failed to create user");
  }
};
