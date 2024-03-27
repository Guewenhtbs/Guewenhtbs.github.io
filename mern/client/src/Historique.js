import React, { useState, useEffect } from 'react';
import './Historique.css';
import 'whatwg-fetch';

function Historique() {
  // État pour stocker les données du tableau
  const [label, setLabel] = useState([
    "Nom", "Sexe", "Animal de compagnie", "MBTI", "Siècle", "Nationalité", "Domaine", "Formation", "Récompense", "Funfacts"
  ]);

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les données depuis l'API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/historique');
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }
        const responseData = await response.json();
        setData([responseData]); // Mettre les données dans l'état 'data'
      } catch (error) {
        console.error('Erreur lors de la récupération des données depuis l\'API:', error);
      }
    };

    // Appeler la fonction pour récupérer les données une fois le composant monté
    fetchData();
  }, []); // L'effet ne dépend pas des valeurs, donc il est exécuté une seule fois après le montage

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
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Historique;
