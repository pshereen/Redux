const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MogDB COnnection Successful");
  } catch (error) {
    console.log("MongoDB COnnection Failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
