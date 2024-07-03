const mongoose = require('mongoose');

MONGO_URI = "mongodb+srv://admin:2134@cluster0.peaqjxo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
    try {
        const coon = await mongoose.connect(MONGO_URI);
        console.log("Mongodb is connected");

    } catch (error) {
        console.error(`Error ${error.message}`);
        process.exit(1);
    }

};
module.exports = connectDB