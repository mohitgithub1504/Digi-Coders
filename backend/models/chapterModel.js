const { Schema, model, Types } = require("../connection");

const schema = new Schema({
  trainer: { type: Types.ObjectId, ref: "trainer" },
  title: {type : String, required : true},
  description: {type : String, required : true},
  category : {type : String, required : true},
  blockStructure: {type : Array, default : []},
  icon: {type : String},
  data: Object,
  created_at: Date,
  updated_at: Date,
});

module.exports = model("chapters", schema);
