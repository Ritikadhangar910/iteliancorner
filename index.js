const express = require("express");
const payment = require("./routes/payment");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(express.json());
app.use("/payment", payment);
app.use(cors());
require("./Db/Config");
const User = require("./Db/users");
const FoodItems = require("./Db/Fooditems");
app.post("/register", async (req, res) => {
  let ans = new User(req.body);
  let result = ans.save();
  res.send(ans);
});

app.post("/foodItem", async (req, res) => {
  let ans = new FoodItems(req.body);
  let result = ans.save();
  res.send(ans);
});

app.listen(PORT);
