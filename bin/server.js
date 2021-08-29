const mongoose = require("mongoose");

const app = require("../app");

const PORT = process.env.PORT || 3000;

DB_HOST =
  "mongodb+srv://Bohdan:FcOzI7GevcN6jEYQ@cluster0.y9gci.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful");

    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
