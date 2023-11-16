import firebase from 'firebase-admin'
import { config } from './config';

const serviceAccount = require('../voting-4ffc6-firebase-adminsdk-8yfou-dc8f3a37fc.json');

const db = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});

export default db;
