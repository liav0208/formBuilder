const { Form } = require("../models/formModel");
const { Submit } = require("../models/submitModel");

exports.saveForm = async (req, res) => {
  if (req.body.title === "" || req.body.fields.length === 0) {
    res.status(400).send("Please enter valid Title and Fields");
  }

  form = new Form({
    title: req.body.title,
    fields: req.body.fields,
  });

  await form.save();

  res.status(200).send(form);
};

exports.getForms = async (req, res) => {
  const orderBy = req.params.order;
  const skip = +req.query.skip;

  const forms = await Form.find({}).sort(`-${orderBy}`).skip(skip).limit(5);

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
  if (req.body.input.length === 0)
    return res.status(404).send("Please Fill the data");

  const submit = new Submit({
    data: req.body.input,
    form_id: req.params.id,
  });

  const form = await Form.findByIdAndUpdate(req.params.id, {
    $inc: { submissions: 1 },
  });

  if (!form) return res.status(404).send("Form id not exist");

  await submit.save();

  res.status(200).send(submit);
};

exports.orderBy = async (req, res) => {
  const order = req.params.order;
  const forms = await Form.find({}).sort(`-${order}`).limit(5);

  if (!forms.length) return res.status(404).send("No forms available");

  res.status(200).send(forms);
};
