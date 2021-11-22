import React, { useState, useEffect } from 'react'
import axios from "axios";

const gitHubUrl = "https://api.coronavirus.data.gov.uk/v1/data/";


const options = {
  method: 'GET',
  url: 'https://covid-19-data.p.rapidapi.com/country/code',
  params: {code: 'gb', format: 'json'},
  headers: {
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
    'x-rapidapi-key': '50f5f1b061mshcd1a4600a78a692p1d5bcejsn273c16eb8746'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

function CovidScreen() {
    
    const [userData, setUserData] = useState({});
    const getGitHubUserWithFetch = async () => {
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        setUserData(jsonData);
      };

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>{userData.country} dsfdsfdsf</p>
        <h2>Covid Data</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">Total Records: {userData.totalRecords}</h5>
        <h5 className="info-item">Cases: {userData.casesCumulative}</h5>
     
      </div>
    </div>
  );
}

export default CovidScreen
