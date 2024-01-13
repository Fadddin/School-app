const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://fardinKhan:AyR90RgJ2MOwqZzQ@cluster0.qmu47yh.mongodb.net/admission")

const studentSchema = mongoose.Schema({
    name: String,
    father: String,
    mother: String,
    age: Number,
    address : String,

})

const Student = mongoose.model('Student', studentSchema)

module.exports = { Student }