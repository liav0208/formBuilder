const router = require("express").Router();
const formController = require("../controller/formController");

router.post("/", formController.saveForm);

module.exports = router;
