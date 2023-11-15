const firebase = require('firebase-admin');
const config = require('./config');

const serviceAccount = require('./voting-4ffc6-firebase-adminsdk-8yfou-dc8f3a37fc.json');

const db = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});

module.exports = db;
