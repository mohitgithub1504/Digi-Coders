const {Schema, model} = require('../connection');

const myschema = new Schema({
    name : String,
    email : String,
    password : String,
    createdAt: Date,
    avatar: String,
    regid: String,
});

module.exports = model('students', myschema);

