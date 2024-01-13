import React, { useEffect, useState } from 'react'
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
    e.preventDefault();
    console.log('Submitted Form Data:', formData);
    try {
      // Send POST request to /Addmission
      // const response = await axios.post('http://localhost:3000/Addmission', formData);

      useEffect(()=> {
        axios.post('http://localhost:3000/Addmission', formData)
          .then(res => console.log(res))
          .catch(err=> console.log(err))
      },[])

      // Handle the response if needed
      console.log('Server Response:', response.data);
    } catch (error) {
      // Handle errors if the POST request fails
      console.error('Error:', error);
    }
    // You can perform further processing or send the data to a server here
  };

  return (
    <div>
      <h2>Student Information Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="father">Father's Name:</label>
        <input
          type="text"
          id="father"
          name="father"
          value={formData.father}
          onChange={handleChange}
          required
        />

        <label htmlFor="mother">Mother's Name:</label>
        <input
          type="text"
          id="mother"
          name="mother"
          value={formData.mother}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Addmission