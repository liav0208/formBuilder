const mongoose = require("mongoose");

const submitSchema = new mongoose.Schema({
  data: {
    type: Array,
    required: true,
  },
  form_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Form",
  },
});

const Submit = mongoose.model("Submit", submitSchema);

module.exports = {
  Submit,
};
