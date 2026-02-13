import { useState } from "react";
import services from "../data/services";


function Booking(){
    const [name,setName]=useState("");
    const [selectedService,setSelectedService]=useState("");
    const [date,setDate]=useState("");
    const [error,setError]=useState("");

    function handleSubmit(e){
        e.preventDefault();

        if(!name  || !selectedService || !date){
          setError("please fill in all fields");
          return;
        }

        setError("");
        alert(`Booking confirmed for ${name}-${selectedService} on ${date}`);

    }

    return(
        <div>
            <h1>Book your Appointment</h1>
            {error && < p style={{color:"red"}}>{error}</p>}
            
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Service:</label>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          > 
          <option value="">Select a service</option>
          {services.map((service)=>(<option key={service.id} value={service.name}>
            {service.name}

          </option>
          
          ))}
          
           </select>
        </div>

        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button type="submit">Book Now</button>
      </form>
        </div>
    );
}

export default Booking;