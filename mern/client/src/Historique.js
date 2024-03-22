import React, { useState } from 'react';
import './Historique.css';

function App() {
  // État pour stocker les données du tableau
  const [label, setLabel] = useState([
    "Nom", "Sexe", "Naissance", "Mort", "Nationalité", "Domaine"
  ]);

  const [data, setData] = useState([
    ["Jo", "M", 25, 8, "Colombien", "Maths"],
    ["Jo", "M", 25, 8, "Colombien", "Maths"],
    ["Jo", "M", 25, 8, "Colombien", "Maths"],
    ["Jo", "M", 25, 8, "Colombien", "Maths"]
  ]);

  return (
    <div className="App">
      <h1>Historique</h1>
      <table className="Tableau">
        <thead className="Header">
          <tr>
            {label.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
