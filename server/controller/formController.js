const { Form } = require("../models/formModel");
const { Submit } = require("../models/submitModel");

exports.saveForm = async (req, res) => {
  if (req.body.title === "" || req.body.fields.length === 0) {
    res.status(400).send("Please enter valid Title and Fields");
  }

  const form = new Form({
    title: req.body.title,
    fields: req.body.fields,
  });

  await form.save();

  res.status(200).send(form);
};

exports.getForms = async (req, res) => {
  const forms = await Form.find();

  res.status(200).send(forms);
};

exports.getFormById = async (req, res) => {
  const formId = req.params.id;

  const form = await Form.findById(formId);
  if (!form) {
    return res.status(404).send("No form with the current id was fount");
  }

  res.status(200).send(form);
};

exports.submitFormInputs = async (req, res) => {
  const submit = new Submit({
    data: req.body.input,
    form_id: req.params.id,
  });

  const form = await Form.findByIdAndUpdate(req.params.id, {
    $inc: { submissions: 1 },
  });

  await submit.save();

  res.status(200).send(submit);
};
