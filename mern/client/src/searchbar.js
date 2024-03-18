const SearchBar = () => {
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
        const filteredResults = liste_prof.filter(item =>
          item.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredResults);
      }
  
      
    };
  
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
          <button key={index} className="result-item">
            {result}
          </button>
          ))}
        </div>
      </div>
    );
  };
  
  
  // Données de test
  const liste_prof = [
    'Stéphane Frenot',
    'Pierre Francois',
    'Oana Iova',
    'Victor Rebecq',
    'Chantal Muller',
    'Claire Goursaud',
  ];
  
  const App = () => {
    return (
      <div>
        <h1>Trouve ton prof préféré</h1>
        <SearchBar />
      </div>
    );
  };
  
  export default App;