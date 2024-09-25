const express = require("express");
const router = express.Router();
const controladorclase = require("./Controladorclase.js")
router.post("/",controladorclase.ingresar);
module.exports = router;