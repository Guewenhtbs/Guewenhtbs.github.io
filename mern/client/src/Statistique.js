import React, { useState } from 'react';
import './Statistique.css';

function Statistique() {
    // État pour stocker les statistiques

    const [Stat, setStat] = useState(
        {
            "pire": [
              { "Nom": "Personne1", "Moyenne": 20 },
              { "Nom": "Personne2", "Moyenne": 18 },
              { "Nom": "Personne3", "Moyenne": 15 },
              { "Nom": "Personne4", "Moyenne": 12 },
              { "Nom": "Personne5", "Moyenne": 10 }
            ],
            "meilleur": [
              { "Nom": "PersonneA", "Moyenne": 80 },
              { "Nom": "PersonneB", "Moyenne": 75 },
              { "Nom": "PersonneC", "Moyenne": 70 },
              { "Nom": "PersonneD", "Moyenne": 65 },
              { "Nom": "PersonneE", "Moyenne": 60 }
            ]
          }


    );

    return (
      <div className="Statistique">
            <div className="Tableau">
                <thead className="Header">
                    <tr>
                        <th>Personnages les plus rapidement trouvés</th>
                        <th>Nombre d'essai en moyenne</th>
                    </tr>
                </thead>
                <tbody>
                    
                        <tr><td>{Stat["meilleur"][0]["Nom"]}</td>
                        <td>{Stat["meilleur"][0]["Moyenne"]}</td></tr>
                        <tr><td>{Stat["meilleur"][1]["Nom"]}</td>
                        <td>{Stat["meilleur"][1]["Moyenne"]}</td></tr>
                        <tr><td>{Stat["meilleur"][2]["Nom"]}</td>
                        <td>{Stat["meilleur"][2]["Moyenne"]}</td></tr>
                        <tr><td>{Stat["meilleur"][3]["Nom"]}</td>
                        <td>{Stat["meilleur"][3]["Moyenne"]}</td></tr>
                        <tr><td>{Stat["meilleur"][4]["Nom"]}</td>
                        <td>{Stat["meilleur"][4]["Moyenne"]}</td></tr>
                    
                </tbody>
            </div> 
            <div className="Tableau">
                <thead className="Header">
                    <tr>
                        <th>Personnages les moins rapidement trouvés</th>
                        <th>Nombre d'essai en moyenne</th>
                    </tr>
                </thead>
                <tbody>
                        <tr><td>{Stat["pire"][0]["Nom"]}</td>
                        <td>{Stat["pire"][0]["Moyenne"]}</td></tr>
                        <tr><td>{Stat["pire"][1]["Nom"]}</td>
                        <td>{Stat["pire"][1]["Moyenne"]}</td></tr>
                        <tr><td>{Stat["pire"][2]["Nom"]}</td>
                        <td>{Stat["pire"][2]["Moyenne"]}</td></tr>
                        <tr><td>{Stat["pire"][3]["Nom"]}</td>
                        <td>{Stat["pire"][3]["Moyenne"]}</td></tr>
                        <tr><td>{Stat["pire"][4]["Nom"]}</td>
                        <td>{Stat["pire"][4]["Moyenne"]}</td></tr>
                </tbody>
            </div>
      </div>
    );
  }
  
  export default Statistique;