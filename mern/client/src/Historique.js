import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Historique.css';

function Historique() {
  const [label, setLabel] = useState([
    "Nom", "sexe", "animal de compagnie", "MBTI", "siècle", "nationalité", "domaine", "formation", "récompense"
  ]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/historique');
        const newData = response.data;

        // Vérifier si les nouvelles données existent déjà dans le tableau
        if (!data.some(row => JSON.stringify(row) === JSON.stringify(newData))) {
          // Si les nouvelles données ne sont pas déjà présentes, les ajouter au tableau
          setData(prevData => [...prevData, newData]);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données depuis l\'API:', error);
      }
    };

    // Rafraîchir les données toutes les 5 secondes
    const intervalId = setInterval(fetchData, 5000);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, [data]); // Déclencher l'effet à chaque fois que les données changent

  return (
    <div className="Historique">
      <table className="Tableau">
        <thead className="Header">
          <tr>
            {label.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {label.map((columnName, colIndex) => (
                <td key={colIndex}>{rowData[columnName]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Historique;
