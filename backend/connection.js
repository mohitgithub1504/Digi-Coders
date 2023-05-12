const mongoose = require('mongoose');

const url = 'mongodb+srv://princeprajapati8948:Prince8948@cluster0.fe8x3cu.mongodb.net/digicoders?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;