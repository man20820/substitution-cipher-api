const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const cipher = require("simple-cipher-js");

app.use(cors());
app.use(bodyParser.json());

app.route("/").get((req, res) => {
  res.send("info: man@tkjpedia.com");
});

app.route("/api/encrypt").post(async (req, res) => {
  var word = req.body.word;
  encrypt = cipher.rot13.encrypt(word);

  res.json({
    encrypted: encrypt,
  });
});

app.route("/api/decrypt").post(async (req, res) => {
  var encrypted = req.body.encrypted;
  decrypt = cipher.rot13.decrypt(encrypted);

  res.json({
    decrypted: decrypt,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
