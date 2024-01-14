import React, { useState } from 'react'
import axios from 'axios'

const Addmission = () => {
  const [formData, setFormData] = useState({
    name: '',
    father: '',
    mother: '',
    age: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    alert("Data Submitted")
    e.preventDefault();
    console.log('Submitted Form Data:', formData);

    const actData = {
      name : formData.name,
      father: formData.father,
      mother: formData.mother,
      age: Number(formData.age),
      address: formData.address
    }
    try {
      // Send POST request to /Addmission
      const response = await axios.post('http://localhost:3000/Addmission', actData);

    
      // Handle the response if needed
      alert("successfully created")
      console.log('Server Response:', response.data);
    } catch (error) {
      // Handle errors if the POST request fails
      console.error('Error:', error);
    }
    
  };

  return (
    <div>
      <h2 className='text-3xl p-4 text-center bg-slate-400'>Student Information Form</h2> <br />
      <form onSubmit={handleSubmit} className='m-6 text-xl'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className=' m-2 border solid'
        /> <br />

        <label htmlFor="father">Father's Name:</label>
        <input
          type="text"
          id="father"
          name="father"
          value={formData.father}
          onChange={handleChange}
          required
          className=' m-2 border solid'
        /> <br />

        <label htmlFor="mother">Mother's Name:</label>
        <input
          type="text"
          id="mother"
          name="mother"
          value={formData.mother}
          onChange={handleChange}
          required
          className=' m-2 border solid'
        /> <br />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          className=' m-2 border solid'
        /> <br />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className=' m-2 border solid'

        /> <br />
        <div className='flex justify-center'>
          <button className='bg-blue-900 text-white py-2 px-4 rounded m-4' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Addmission