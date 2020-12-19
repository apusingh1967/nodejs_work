var admin = require("firebase-admin");
var csv = require('csvtojson');
var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://airportdata-default-rtdb.firebaseio.com"
});

admin.database.enableLogging(true);

var db = admin.database();
var ref = db.ref('airports');

csv().fromFile('./airports_short.csv')
    .then(function(json){
         json.forEach(function(elem){
          ref.child(elem.id).set(elem);
         });
         console.log('finished...' + ref);
        });
   // .then(function(o){
     //    process.exit();
    // });
