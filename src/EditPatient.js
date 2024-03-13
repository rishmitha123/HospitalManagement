// import React,{useState,useEffect} from 'react';
// import axios from 'axios';
// const EditPatient=({patientId,onClose,onupdate})=>{
//     const [patientData,setPatientData]=useState({});
//     useEffect(()=>{
//         //bringing the patient details from the api to the patient.js component
//         const fetchPatientData=async ()=>{
//             try{
//                 //fetching the data based on patientId
//                 const response=await axios.get(`https://backendhospital-ji3g.onrender.com/patients/${patientId}`);
//             }
//             catch(error){
//                 console.log("error in fetching the data",error);
//             }

//         }
//     },[patientId]);
//     const handleUpdate= async ()=>{
//         try{
//             await axios.put(`https://backendhospital-ji3g.onrender.com/patients/${patientId}`,patientData);
//             //props
//             onClose();
//             onupdate();
//         }
//         catch(error){
//             console.log("error in updating patient info",error);
//         }
//         }
//         const handleChange=(e)=>{
//             const[name,value]=e.target;
//             setPatientData({...patientData,[name]:value});

//         }
    
//     return(
//         <div>
//             <h2>Edit patient</h2>
//             <label>Name :</label>
//             <input type="text" name="name" value={patientData.name || ''} onChange={handleChange}/>
//             <label>Weight :</label>
//             <input type="text" name="weight" value={patientData.weight || ''} onChange={handleChange}/>
//             <label>Gender :</label>
//             <input type="text" name="gender" value={patientData.gender || ''} onChange={handleChange}/>
//             <label>Age :</label>
//             <input type="text" name="age" value={patientData.age || ''} onChange={handleChange}/>
//             <label>Disease :</label>
//             <input type="text" nmae="disease" value={patientData.disease || ''} onChange={handleChange}/>
//             <button onClick={handleUpdate}>Update</button>
//             <button onClick={onClose}>Cancel</button>

//         </div>
//     )
// }
// export default EditPatient;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditPatient = ({ patientId, onClose, onUpdate }) => {
  const [patientData, setPatientData] = useState({});

  useEffect(() => {
      //bringing the patient details from the api to the patient.js component
    //get
    const fetchPatientData = async () => {
      try {
         //fetching the data based on patientId
        const response = await axios.get(`https://backendhospital-ji3g.onrender.com/patients/${patientId}`);
        setPatientData(response.data);
      } catch (error) {
        console.error('Error fetching patient data for editing:', error);
      }
    };

    fetchPatientData();
  }, [patientId]);

  const handleUpdate = async () => {
    try {
      await axios.put(`https://backendhospital-ji3g.onrender.com/patients/${patientId}`, patientData);
      onClose();
      onUpdate();
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  return (
    <div>
      <h2>Edit Patient</h2>

      <label>Name: </label>
      <input type="text" name="name" value={patientData.name || ''} onChange={handleChange} />

      <label>Weight: </label>
      <input type="text" name="weight" value={patientData.weight || ''} onChange={handleChange} />

      <label>Gender: </label>
      <input type="text" name="gender" value={patientData.gender || ''} onChange={handleChange} />

      <label>Age: </label>
      <input type="text" name="age" value={patientData.age || ''} onChange={handleChange} />

      <label>Disease: </label>
      <input type="text" name="disease" value={patientData.disease || ''} onChange={handleChange} />

      {/* <label>Doctor ID: </label>
      <input type="text" name="doctorId" value={patientData.doctorId || ''} onChange={handleChange} /> */}

      <button onClick={handleUpdate}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditPatient;
