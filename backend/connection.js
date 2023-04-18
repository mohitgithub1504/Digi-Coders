const mongoose = require('mongoose');

const url = 'mongodb+srv://mohitmishra9260:mohit1504@cluster0.hvp2uy9.mongodb.net/mydatabase?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;