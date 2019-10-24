const express = require("express");

const app = express();
const router = express.Router();

app.use(require('cors')());

app.get("/songs", (req, res) => {
  res.json([
    {
      name: "Lost Chameleon - Genesis",
      filename: "LostChameleon"
    },
    {
      name: "The Hipsta - Shaken Soda",
      filename: "Rock"
    },
    {
      name: "Tobu - Such Fun",
      filename: "Tobu"
    }
  ]);
});

app.listen(8081, () => console.log('listening in http://localhost:8081'));
