import './logo.svg';
import './App.css';
import SearchBar from './searchbar';
import Historique from './Historique';
import BlockInfo from './BlocTexte';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Télécomdle</h1>
      </div>

      <div className="Box_info">
        <p>CARTE D'IDENTITE</p>
        <BlockInfo />
        {/* <img
        className="Photo"
        src='logo.svg'
        style={{
          width: 200,
          height: 200
        }}
        ></img>

        <div className="nom_de_la_caractéristique">
          X
        </div> */}

      </div>
      <SearchBar />
      <Historique />
    </div>
  );
}

export default App;