import React,{useState,useEffect} from 'react';
import axios from 'axios';// FOR HTTP REQUESTS SUCH AS CRUD OPERATIONS
function Doctor(){
    const [doctors,setDoctors]=useState([]);
    //mount phase in functional component UseEffect after the component rendering the doctor details are rendered
    useEffect(()=>{
        const fetchDoctors=async ()=>{
            try{
                //bringing doctor details name,age.specialization,gender,salary
                const response=await axios.get('https://backendhospital-ji3g.onrender.com/doctors');
                //initially in doctors there will be no details when we use setDoctors(response.data) then the doctor details are bought in the ui(get or retrieved information)
                setDoctors(response.data);
            }
            catch(error){
                console.log("error in fetching the doctor :"+error);
            }
        }
        fetchDoctors();//calling the function
    },[])//mount based on dependency
    return(
        <div>
            <center>
            <h1>Doctor</h1>
            {
                //mapping all the doctor details
                doctors.map((doctor)=>(
                    <div key={doctor.id}>
                        <p><strong>{doctor.name}</strong></p>
                        <p>{doctor.specialization}</p>
                        <p>Doctor ID :{doctor.id}</p>
                    </div>

                ))
            }
            </center>
           
        </div>
    )
}
export default Doctor;