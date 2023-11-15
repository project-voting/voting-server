const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.firestore();

const addUser = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await firestore.collection('CRUD_TEST').doc().set(data);
    res.send('Record saved successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = { addUser };
