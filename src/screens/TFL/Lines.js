import React, { useState, useEffect } from 'react'
import axios from "axios";

const tflData = "https://api.tfl.gov.uk/StopPoint/940GZZLUASL/Arrivals?app_key=399cb984cf0b4dd18310d476cf5e2396";

axios.request(tflData).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

function Lines() {
    
    const [userData, setUserData] = useState([])
    const tflUserWithFetch = async () => {
        const response = await fetch(tflData);
        const jsonData = await response.json();
        setUserData(jsonData);
      };

  useEffect(() => {
    tflUserWithFetch();
  }, []);
  
  return (
    <div className="App">
        <header className="App-header">
        <h2>Line Data</h2>
        </header>
      
    {userData.map((data) => (
        <div className="user-container" key={data.id}>
            <h5 className="info-item">Tube station: {data.stationName} - {data.platformName}</h5>
            <h5 className="info-item">Arrival: {data.expectedArrival}</h5>
        </div>
        ))
    }
    

    </div>
  );
}

export default Lines
