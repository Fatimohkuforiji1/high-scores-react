import React, {useState} from 'react'

const CountryScores = (props) => {
    let scores = props.scores;
    scores.sort((a, b) => {
      if (a.s < b.s) {
        return 1;
      } else {
        return -1;
      }
    });
const HandleSortClick = () => {
const [sort, setSort] = useState(ascending);


const ascending = () => {
      scores.sort((a, b) => {
        if (a.s < b.s) {
          return 1;
        } else {
          return -1;
        }
      });
    };
    const descending = () => {
      scores.sort((a, b) => {
        if (a.s < b.s) {
          return -1;
        } else {
          return 1;
        }
      });
    };
  };
       
    return (
      <table className = "borderContainer" border="1px">
        <tbody>
          {scores.map((score, index) => (
            <tr key = {index}>
              <th>{score.n}</th>
              <td>{score.s}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default CountryScores
