const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const { createStudent } = require('./types');
const { Student } = require('./db')

app.use(express.json());
app.use(cors());

app.get('/' ,(req, res) => {
    res.status(200).send("Home reached")
})

app.post('/Addmission' ,async (req, res) => {
    const createPayload = req.body
    const parsePayload = createStudent.safeParse(createPayload);

    if(!parsePayload.success) {
        res.status(411).json({
            msg: "Wrong Inputs",
            errors: parsePayload.error.errors,
        })
        return
    }

    await Student.create({
        name: createPayload.name,
        father: createPayload.father,
        mother: createPayload.mother,
        age: createPayload.age,
        address : createPayload.address,
    })
    res.json({
        msg: "New Student created successfully"
    })
})

app.listen(port , () => {
    console.log(`app is listening on port ${port}`)
})