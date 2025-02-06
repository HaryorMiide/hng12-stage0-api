require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8098;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    email: "Haryormiidesanusi@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/HaryorMiide/hng12-stage0-api.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
