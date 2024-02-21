const express = require("express");
const app = express();

const port = process.env.PORT | 8000;

app.get("/", (req, res) => {
  res.json({
    status: "success",
    response: `Success`,
    port: port,
  });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
