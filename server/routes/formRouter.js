const router = require("express").Router();
const formController = require("../controller/formController");

router.get("/orderBy/:order", formController.orderBy);
router.get("/list/:order", formController.getForms);
router.post("/", formController.saveForm);
router.post("/submit/:id", formController.submitFormInputs);
router.get("/:id", formController.getFormById);

module.exports = router;
