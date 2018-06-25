let express = require("express");
let bodyParser = require("body-parser");
const app = express();
const fetch = require("node-fetch");

const mongoose = require("mongoose");
mongoose.connect('mongodb://yoginicodini:1lovecoding@ds119820.mlab.com:19820/express-practice-yogini');

app.use(bodyParser.json());

const messageRoute = require("./routes/MessageRoute");
const orderRoute = require("./routes/OrderRoute");
const taskRoute = require("./routes/TaskRoute");

app.use(messageRoute);
app.use(orderRoute);
app.use(taskRoute);

app.get("./components/dateTime", (req, res)=> {
    let date = new Date();
    return res.send(date);
});

const dataObj = {};

fs.readFile("data.csv", 'utf8', function (err, data) {
 if (err) {return console.log(err);}
 const allData = data.split("\n")
 const keyArr = allData[0].trim().split(",");
 const valArr = allData[1].split(",");
 keyArr.forEach((key, i) => dataObj[key] = valArr[i]);
});

app.get("/newComments", (req, res) => {
    res.json(dataObj["new_comments"]);
});

app.get("/newTasks", (req, res) => {
    res.json(dataObj["new_tasks"]);
});

app.get("/newOrders", (req, res) => {
    res.json(dataObj["new_orders"]);
});

app.get("/tickets", (req, res) => {
    res.json(dataObj["tickets"])
});

fetch("https://randomfox.ca/floof/")
.then(res => res.json())
.then(json => {
    app.get("/foxes", (req, res) => {
        res.json(json.image)
    })
});

app.listen(666, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 666");
});  
