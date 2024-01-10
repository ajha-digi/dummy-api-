const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://digisprintajeetjha:5GMKZez1kA5FpAQm@cluster0.yfdrddr.mongodb.net/',{})
    .then(()=>console.log('MongoDB connected !!'))
    .catch(error => console.log(error))

