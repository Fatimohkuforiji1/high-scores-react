import './App.css';
import CountryNames from './component/CountryNames';
import CountryScores from './component/CountryScores';
import Header from './component/Header';
import allCountryScores from "./data/allCountryScores.js";



function App() {
 const sortedCountryNames = allCountryScores.sort((a, b)=> {
   if (a.name < b.name){
     return -1 
   }
   else{
     return 1
   }
 })

  return (
    <div>
      <Header />
    
      {sortedCountryNames.map((country, index) => (
        <div key={index}>
          <CountryNames name={country.name} />
          <CountryScores scores = {country.scores} />
        </div>
      ))}
    </div>
  );
}

 
export default App;
