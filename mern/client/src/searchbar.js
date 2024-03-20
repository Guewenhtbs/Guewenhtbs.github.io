import React, { useState } from 'react';
import './searchbar.css';

function SearchBar() {
  // Données de test
  const [listProf, setlistProf] = useState([
    'Stéphane Frenot',
    'Pierre Francois',
    'Oana Iova',
    'Victor Rebecq',
    'Chantal Muller',
    'Claire Goursaud',
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
    alert(text);
    // Remplacer alert par la fonction de requête de personne
    setSearchQuery('');
    setSearchResults([]);
    setlistProf(listProf.filter(item => item!== text));
  }

  return (
    <div>
      <input 
        className="bar"
        type="text"
        placeholder="Rechercher..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      
      <div className="results">
        {searchResults.map((result, index) => (
        <button key={index} className='result-item' onClick={() => handleClick(result)}>{result}</button>
        ))}
      </div>
    </div>
  );

};

  

  
const App = () => {
    return (
        <div>
        <h1>Trouve ton prof préféré</h1>
        <SearchBar />
        </div>
    );
};

export default App;