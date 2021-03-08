const router = require("express").Router();
const formController = require("../controller/formController");

router.get("/orderBy/:order", formController.orderBy);
router.post("/", formController.saveForm);
router.get("/", formController.getForms);
router.post("/submit/:id", formController.submitFormInputs);
router.get("/:id", formController.getFormById);

module.exports = router;
