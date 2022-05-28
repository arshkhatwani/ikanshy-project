const express = require("express");
const app = express();
const port = 3000;

const userRoutes = require("./routes/userRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/transaction", transactionRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
