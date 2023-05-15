const { Schema, model, Types } = require("../connection");

const schema = new Schema({
  trainer: { type: Types.ObjectId, ref: "user" },
  title: {type : String, required : true},
  description: {type : String, required : true},
  category : {type : String, required : true},
  icon: {type : String},
  data: Object,
  created_at: Date,
  updated_at: Date,
});


module.exports = model("chapters", schema);
