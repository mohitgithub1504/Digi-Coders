const {Schema, model} = require('../connection');

const myschema = new Schema({
    name : String,
    type : String,
    color : String,
    size : String
});

module.exports = model('products', myschema);