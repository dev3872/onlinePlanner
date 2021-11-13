const mongoose = require("mongoose");
const config = require("config");
const db =
  "mongodb+srv://dev3872:dev3872@cluster0.vlr2x.mongodb.net/onlinePlanner?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: false,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;