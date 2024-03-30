import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './searchbar.css'; // Import du fichier CSS
import { requeteClient } from './Requete.js';

function SearchBar() {
  // Données de test
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noms, setNoms] = useState([]); // Stocker les noms récupérés depuis l'API

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/noms');
        const newData = response.data;
        setNoms(newData); // Stocker les noms récupérés dans l'état
      } catch (error) {
        console.error('Erreur lors de la récupération des données depuis l\'API:', error);
      }
    };

    // Rafraîchir les données toutes les 5 secondes ou lorsque les noms changent
    const intervalId = setInterval(fetchData, 5000);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, [noms]); // Déclencher l'effet lorsque les noms changent

  // Fonction pour mettre à jour les résultats de recherche
  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query === '') {
      setSearchResults([]);
    }
    else {
      // Filtrer les résultats en fonction de la recherche
      const filteredResults = noms.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  function handleClick(text) {
    requeteClient(text);
    setSearchQuery('');
    setSearchResults([]);
    // setNoms(noms.filter(item => item !== text));
  }

  return (
    <div className="container">
      <input 
        className="bar"
        type="text"
        placeholder="Rechercher..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
    
      <div className='results'>
        {searchResults.map((result, index) => (
          <button key={index} className='result-item' onClick={() => handleClick(result)}>{result}</button>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
