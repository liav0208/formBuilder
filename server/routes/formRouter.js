const router = require("express").Router();
const formController = require("../controller/formController");

router.post("/", formController.saveForm);
router.get("/", formController.getForms);

module.exports = router;
