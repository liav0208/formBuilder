const { Form } = require("../models/formModel");

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

  console.log(forms);

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
