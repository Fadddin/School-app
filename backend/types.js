const zod = require('zod')

const createStudent = zod.object({
    name: zod.string(),
    father: zod.string(),
    mother: zod.string(),
    age: zod.number(),
    address : zod.string(),
})

module.exports = {
    createStudent,
  };