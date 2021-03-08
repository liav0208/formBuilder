const router = require("express").Router();
const formController = require("../controller/formController");

router.post("/", formController.saveForm);
router.get("/", formController.getForms);
router.get("/:id", formController.getFormById);
router.post("/submit/:id", formController.submitFormInputs);

module.exports = router;
