// import React,{useState,useEffect} from 'react';
// import axios from 'axios';
// function Patient(){
//     //wrapping all the details in useState or else you can use seperately like cont [name,setName]=useState(''); and same fro all the data
//     const [patientData,setPatientData]=useState({
//         name:'',
//         weight:'',
//         gender:'',
//         age:'',
//         disease:'',
//         doctorId:null
       
//     })
//     const handleChange=(e)=>{
//         //here name indicates the name,weight,gender,age,disease,doctorId etc
//         //value means current value what you entered in the input field by user 
//         //e.target means current value
//         const {name,value}=e.target;
//         //so updated value through e.target is updated and added to the spread operator(...)patientsdata
//         setPatientData({...patientData,[name]:value});
//         //[name]:property like age,disease etc
//         //value:23,fever etc

//     }
//     const handleSubmit=async (e)=>{
//         e.preventDefault();
//         try{
//             const response=await axios.post('https://backendhospital-ji3g.onrender.com/patients',patientData);
//             console.log("patient data is created :",response.data);
//         }
//         catch(error){
//             console.log('error in creating patient details ',error);
//         }

//     }
//     return(
//         <div>
//             <h2>Register the patient details</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Name :</label>
//                 <input type="text" name="name" value={patientData.name} onChange={handleChange}/>
//                 <label>Weight :</label>
//                 <input type="text" name="weight" value={patientData.weight} onChange={handleChange}/>
//                 <label>Gender :</label>
//                 <input type="text" name="gender" value={patientData.gender} onChange={handleChange}/>
//                 <label>Age :</label>
//                 <input type="text" name="age" value={patientData.age} onChange={handleChange}/>
//                 <label>Disease :</label>
//                 <input type="text" name="disease" value={patientData.disease} onChange={handleChange}/>
//                 <label>DoctorId :</label>
//                 <input type="text" name="doctorId" value={patientData.doctorId} onChange={handleChange}/>
//                 <button>Create patient</button>
//             </form>
            
//         </div>
//     )
// }
// export default Patient;


import React, { useState } from 'react';
import axios from 'axios';

const PatientForm = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    weight: '',
    gender: '',
    age: '',
    disease: '',
    doctorId: null, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
    
      const response = await axios.post('https://backendhospital-ji3g.onrender.com/patients', patientData);
      
      console.log('Patient created:', response.data);
     
    } catch (error) {
      console.error('Error creating patient:', error);
    }
  };

  return (
 <center>
     <div>
      <h2>Create New Patient</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={patientData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Weight:
          <input type="text" name="weight" value={patientData.weight} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Gender:
          <input type="text" name="gender" value={patientData.gender} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Age:
          <input type="text" name="age" value={patientData.age} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Disease:
          <input type="text" name="disease" value={patientData.disease} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Doctor ID:
          <input type="text" name="doctorId" value={patientData.doctorId} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Create Patient</button>
      </form>
    </div>
 </center>
  );
};

export default PatientForm;
