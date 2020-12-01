import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Smith",
    email: "john@example",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Mariepowitz",
    email: "jane@example",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
