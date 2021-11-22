const Cov19API = require("@publichealthengland/uk-covid19");


function CovidCases() {

const englandOnly = [
    'areaType=nation',
    'areaName=England'
];

const casesAndDeaths = {
    "date": "date",
    "areaName": "areaName",
    "areaCode": "areaCode",
    "newCasesByPublishDate": "newCasesByPublishDate",
    "cumCasesByPublishDate": "cumCasesByPublishDate",
    "newDeathsByDeathDate": "newDeathsByDeathDate",
    "cumDeathsByDeathDate": "cumDeathsByDeathDate"
};

const api = new Cov19API({
    filters: englandOnly,
    structure: casesAndDeaths
});

const data = api.getJSON(); 

return (
    <div className="App">
      <header className="App-header">
        <h2>Covid Data</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">Total Records: {data.newCasesByPublishDate}</h5>
        <h5 className="info-item">Cases: {data.newDeathsByDeathDate}</h5>
     
      </div>
    </div>
  );
}

export default CovidCases
