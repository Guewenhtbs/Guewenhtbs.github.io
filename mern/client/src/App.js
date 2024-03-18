import React, { useState } from 'react';
import './App.css';

function App() {
  // État pour stocker les données du tableau
  const [data, setData] = useState([
    { id: 1, nom: 'John', age: 25 }
  ]);

  return (
    <div className="App">
      <h1>Tableau</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Sexe</th>
            <th>Naissance</th>
            <th>Mort</th>
            <th>Nationalité</th>
            <th>Domaine</th>
            <th>Formation</th>
            <th>Récompense</th>
            <th>Fun facts</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.nom}</td>
              <td>{item.age}</td>
              {/* Ajoutez d'autres colonnes ici */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
