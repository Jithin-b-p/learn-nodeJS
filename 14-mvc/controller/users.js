const { users } = require("../data/data");

const getUsers = (req, res) => {
  res.status(200).json(users);
};

const createUser = (req, res) => {
  const { name, username, email } = req.body;
  if (!name || !username || !email) {
    return res
      .status(401)
      .json({ status: "failure", message: "not enough details!!" });
  }

  const newUsers = [...users, { name, username, email }];
  res.status(201).json({ success: "true", data: newUsers });
};

const updateUser = (req, res) => {
  const { name, username, email } = req.body;

  const { id } = req.params;

  if (!id) {
    return res
      .status(401)
      .json({ status: "failed", message: "provide the id!!" });
  }

  const user = users.filter((user) => user.id === Number(id));
  if (!user.length) {
    return res.status(401).json({ status: "failed", message: "Invalid ID" });
  }

  if (!name || !username || !email) {
    return res
      .status(401)
      .json({ status: "failed", message: "details are not present!!" });
  }

  const updatedUser = users.map((user) => {
    if (user.id === Number(id)) {
      return { id, ...req.body };
    }

    return user;
  });

  return res.status(201).json({ status: "success", data: updatedUser });
};

const updateField = (req, res) => {
  const { id } = req.params;
  const { name, username, email } = req.body;

  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return res
      .status(401)
      .json({ status: "failure", message: "ID is invalid!!" });
  }

  if (!name && !username && !email) {
    return res
      .status(401)
      .json({ status: "failure", message: "No valid details present" });
  }
  const updatedUser = users.map((user) => {
    if (user.id === parseInt(id)) {
      if (name) {
        return { ...user, name };
      } else if (username) {
        return { ...user, username };
      } else if (email) {
        return { ...user, email };
      }
    } else {
      return { ...user };
    }
  });

  res.status(200).json({ status: "success", data: updatedUser });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return res.status(404).json({ status: "failure", message: "invalid ID" });
  }

  const newUsers = users.filter((user) => user.id !== Number(id));

  res.send({ status: "success", data: newUsers });
};

module.exports = { getUsers, createUser, updateUser, updateField, deleteUser };
