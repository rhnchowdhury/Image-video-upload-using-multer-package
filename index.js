const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const imageName = Date.now() + "-" + file.originalname;
    cb(null, imageName);
  },
});

const upload = multer({ storage: storage });

app.post("/", upload.single("image"), (req, res) => {
  res.send("File is uploaded");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
