const mongoose = require('mongoose');

const url = 'mongodb+srv://princeprajapati8948:<password>@cluster0.fe8x3cu.mongodb.net/users?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;