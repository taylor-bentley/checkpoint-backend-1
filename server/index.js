let express = require("express");
let bodyParser = require("body-parser");
const app = express();

app.listen(666, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 666");
});
