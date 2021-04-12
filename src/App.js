import './App.css';
import CountryNames from './component/CountryNames';
import CountryScores from './component/CountryScores';
import Header from './component/Header';
import allCountryScores from "./data/allCountryScores.js";
import React, { useState } from "react";


function App() {
 const sortedCountryNames = allCountryScores.sort((a, b)=> {
   if (a.name < b.name){
     return -1 
   }
   else{
     return 1
   }
 })

 const [sort, setSort] = useState("ascending");
 const SortButton =()=>{
  setSort(sort =>{
    if (sort === "ascending"){
      return "descending"
    } else { return "ascending"}
  } )
 }

  return (
    <div className="body">
      <Header />
      <button onClick={SortButton}>Sort </button>
      {sortedCountryNames.map((country, index) => (
        <div key={index}>
          <section className="divtables">
            <CountryNames name={country.name} />
            <CountryScores orderOfSorts={sort} scores={country.scores} />
          </section>
        </div>
      ))}
    </div>
  );
}

 
export default App;
