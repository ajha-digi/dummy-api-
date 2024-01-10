const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/index.js");
const app = express();
const PORT = process.env.PORT || 9000;

const UserModel = require("./models/user.js");
app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "test 1",
  },
  {
    id: 2,
    name: "test 2",
  },
  {
    id: 3,
    name: "test 3",
  },
];

app.get("/", async function (req, res) {
  const userData = await UserModel.find({});
  res.json(userData);
});

app.get("/:id", async function (req, res) {
  const { id } = req.params;
  const user = await UserModel.findById(id);
  res.json(user);
});

app.post("/", async function (req, res) {
  const { name } = req.body;
  const newUser = new UserModel({ name });
  const resp = await newUser.save();
  res.json(resp);
});

app.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { name } = req.body;
  const userToUpdate = await UserModel.findById(id);
  userToUpdate.name = name;
  const updatedUser = await userToUpdate.save();
  res.json(updatedUser);
});

app.delete("/:id", async function (req, res) {
  const { id } = req.params;
  const deletedUser = await UserModel.findByIdAndDelete(id);
  res.json({ message: `${deletedUser.name} deleted successfully` });
});

app.listen(PORT, function () {
  console.log(`express server is running at http://localhost:${PORT}`);
});
