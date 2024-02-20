const express = require("express");
const app = express();
const port = 3000;
const calculatorRoutes = require("./routes/myCalculatorRoutes");

app.use(express.json());
app.use("/calculator", calculatorRoutes);

app.use("/", express.static("public"));

app.listen(port, () => {
  console.log(`updates at http://localhost:${port}`);
});
