const db = require("../config/db-config");

// Get all users
const getAllUsers = (req, res) => {
  const sqlQuery = "SELECT * FROM users";
  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
      return;
    }
    res.json(results);
  });
};

// Create user

const createUser = (req, res) => {
  const user = req.body;
  const sqlQuery = "Insert into users Set ?";
  db.query(sqlQuery, user, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
      return;
    }
    console.log(result);
    res.status(200).json({
      message: "Created Successfully",
      code: 200,
    });
  });
};

//Get User By Id

const getUserById = (req, res) => {
  const user_id = req.params.id;
  const sqlQuery = "Select * from users Where u_id = ?";
  db.query(sqlQuery, user_id, (err, result) => {
    if (err) {
      console.error(err);
      return null;
    }
    console.log(result);
    result.length
      ? res.json(result)
      : res.status(200).json({
          message: "user not found",
          code: 200,
        });
  });
};

// Update User
const updateUser = (req, res) => {
  const { u_id, u_first_name, u_last_name, u_department, role_id } = req.body;
  const sqlQuery = `UPDATE users SET u_first_name = ? ,u_last_name = ? ,u_department = ? ,u_role_id = ? ,u_updated_on = ?  WHERE  (  (  u_id = ? )  )`;
  db.query(
    sqlQuery,
    [u_first_name, u_last_name, u_department, role_id, new Date(), u_id],
    (err, result) => {
      if (err) {
        console.error(err);
        return null;
      }
      console.log(result);
      res.status(200).json({
        message: "User Updated Successfully",
        code: 200,
      });
    }
  );
};

// Delete User

const deleteUser = (req, res) => {
  const { u_id } = req.query;
  const sqlQuery = `UPDATE users SET u_status = ? ,u_updated_on = ?  WHERE  (  (  u_id = ? )  )`;
  db.query(sqlQuery, ["2", new Date(), u_id], (err, result) => {
    if (err) {
      console.error(err);
      return null;
    }
    console.log(result);
    res.status(200).json({
      message: "User Deleted Successfully",
      code: 200,
    });
  });
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
