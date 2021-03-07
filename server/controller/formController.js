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
