const mongoose=require("mongoose")



 const connect = () => {
 
    mongoose.connect("mongodb+srv://pavan:Amol_123@cluster0.jybxo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

module.exports = connect;