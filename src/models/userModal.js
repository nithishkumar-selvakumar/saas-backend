import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import { USER_ROLES } from "../config/constant.js";

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM(...Object.values(USER_ROLES)),
      defaultValue: USER_ROLES.READER,
      allowNull: false,
    },
  },
  {
    underscored: true,
    timestamps: true,
    tableName: "users",
  }
);
export default User;
