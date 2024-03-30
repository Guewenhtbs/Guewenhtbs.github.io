import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Statistique.css';

function Statistique() {
    // État pour stocker les statistiques

    const [Stat, setStat] = useState(
        {
          "pire": [
            { "nom": "Personne1", "moyenne": 20 },
            { "nom": "Personne2", "moyenne": 18 },
            { "nom": "Personne3", "moyenne": 15 },
            { "nom": "Personne4", "moyenne": 12 },
            { "nom": "Personne5", "moyenne": 10 }
          ],
          "meilleur": [
            { "nom": "PersonneA", "moyenne": 80 },
            { "nom": "PersonneB", "moyenne": 75 },
            { "nom": "PersonneC", "moyenne": 70 },
            { "nom": "PersonneD", "moyenne": 65 },
            { "nom": "PersonneE", "moyenne": 60 }
          ]
        }
    );
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/api/statistiques');
          const newData = response.data;
          setStat(newData);
          // // Vérifier si les nouvelles données existent déjà dans le tableau
          // if (!data.some(row => JSON.stringify(row) === JSON.stringify(newData))) {
          //   // Si les nouvelles données ne sont pas déjà présentes, les ajouter au tableau
          //   setData(prevData => [...prevData, newData]);
          // }
        } catch (error) {
          console.error('Erreur lors de la récupération des données depuis l\'API:', error);
        }
      };
  
      // Rafraîchir les données toutes les 5 secondes
      const intervalId = setInterval(fetchData, 200);
  
      // Nettoyer l'intervalle lorsque le composant est démonté
      return () => clearInterval(intervalId);
    }, [Stat]);

    return (
      <div className="Statistique">
            <div className="Tableau">
                <thead className="Header">
                    <tr>
                        <th>Personnages les plus rapidement trouvés</th>
                        <th>Nombre d'essais en moyenne</th>
                    </tr>
                </thead>
                <tbody>
                    
                        <tr><td>{Stat["meilleur"][0]["nom"]}</td>
                        <td>{Stat["meilleur"][0]["moyenne"]}</td></tr>
                        <tr><td>{Stat["meilleur"][1]["nom"]}</td>
                        <td>{Stat["meilleur"][1]["moyenne"]}</td></tr>
                        <tr><td>{Stat["meilleur"][2]["nom"]}</td>
                        <td>{Stat["meilleur"][2]["moyenne"]}</td></tr>
                        <tr><td>{Stat["meilleur"][3]["nom"]}</td>
                        <td>{Stat["meilleur"][3]["moyenne"]}</td></tr>
                        <tr><td>{Stat["meilleur"][4]["nom"]}</td>
                        <td>{Stat["meilleur"][4]["moyenne"]}</td></tr>
                    
                </tbody>
            </div> 
            <div className="Tableau">
                <thead className="Header">
                    <tr>
                        <th>Personnages les moins rapidement trouvés</th>
                        <th>Nombre d'essais en moyenne</th>
                    </tr>
                </thead>
                <tbody>
                        <tr><td>{Stat["pire"][0]["nom"]}</td>
                        <td>{Stat["pire"][0]["moyenne"]}</td></tr>
                        <tr><td>{Stat["pire"][1]["nom"]}</td>
                        <td>{Stat["pire"][1]["moyenne"]}</td></tr>
                        <tr><td>{Stat["pire"][2]["nom"]}</td>
                        <td>{Stat["pire"][2]["moyenne"]}</td></tr>
                        <tr><td>{Stat["pire"][3]["nom"]}</td>
                        <td>{Stat["pire"][3]["moyenne"]}</td></tr>
                        <tr><td>{Stat["pire"][4]["nom"]}</td>
                        <td>{Stat["pire"][4]["moyenne"]}</td></tr>
                </tbody>
            </div>
      </div>
    );
  }
  
  export default Statistique;