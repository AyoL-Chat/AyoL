const express = require("express");
const Gun = require("gun");
const app = express();
const PORT = process.env.PORT || 3030;

app.use(Gun.serve);

const server = app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});

Gun({ web:server });