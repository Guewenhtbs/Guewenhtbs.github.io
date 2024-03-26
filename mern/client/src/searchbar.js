import React, { useState } from 'react';
import './searchbar.css';
import { requeteClient } from './Requete.js';

function SearchBar() {
  // Données de test
  const [listProf, setlistProf] = useState([
    "Albert",
    "Pierre",
    "Remi",
    "Lise",
    "Adam",
    "Emma",
    "Ines",
    "Titouan",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a"
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Fonction pour mettre à jour les résultats de recherche
  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query === '') {
      setSearchResults([]);
    }
    else {
      // Simuler la recherche en filtrant une liste de résultats
      const filteredResults = listProf.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };
  

  function handleClick(text) {
    requeteClient(text);
    setSearchQuery('');
    setSearchResults([]);
    setlistProf(listProf.filter(item => item!== text));
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

};


export default SearchBar;