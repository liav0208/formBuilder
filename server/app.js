const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const formRouter = require("./routes/formRouter");

mongoose
  .connect("mongodb://localhost:27017/formBuilderDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Connect to mongo"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/form", formRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`click http://localhost:${PORT}`));
