var admin = require("firebase-admin");

var serviceAccount = require("../artful-affinity-423716-j0-firebase-adminsdk-3h4gz-333e19160b.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://artful-affinity-423716-j0-default-rtdb.firebaseio.com"
});

const db = admin.database();
module.exports = db;