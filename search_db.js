var admin = require("firebase-admin");
var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://airportdata-default-rtdb.firebaseio.com"
});

// admin.database.enableLogging(true);

var db = admin.database();
var ref = db.ref('airports');

ref.orderByChild("name").limitToLast(1).on("value", function(snapshot) {
  console.log(snapshot);
});
