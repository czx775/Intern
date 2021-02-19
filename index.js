const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models/sequilize");
const app = express();

let whiteList = ['http://localhost:3000',];
let corsOptions = {
    origin: function(origin, callback){
        if(whiteList.indexOf(origin) !== -1  || !origin){
            callback(null, true)
        }else{
            callback(new Error("Not Allowed"))
        }
    }
};
db.sequelize.sync();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/home", (req,res) => {
    res.json("Selamat Datang!");
});

require("./app/route/route")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});