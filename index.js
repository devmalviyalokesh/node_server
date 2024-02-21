const express = require("express");
const app = express();

const port = process.env.PORT | 8000;

app.get("/api/users", (req, res) => {
  res.json({
    status: "success",
    user: {
      _id: "5ce45d7606444f199acfba1e",
      name: { given: "Alex", family: "Smith" },
      email: "email@example.com",
      age: 27,
    },
    response_from_port: port,
  });
});

app.get("/api/products", (req, res) => {
  res.json({
    status: "success",
    user: {
      _id: "5ce45d7606444f199acfba2e",
      name: "One plus",
      price: 27,
    },
    response_from_port: port,
  });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
