const app = require("./index.js"); 
const connect = require("./configs/db.js");


app.listen(3005, async () => {
    await connect();


    console.log("Listening on port 3005");
})