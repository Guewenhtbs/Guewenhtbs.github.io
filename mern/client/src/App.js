import React, {useState} from 'react';
import './logo.svg';
import './App.css';
import SearchBar from './searchbar';
import Historique from './Historique';


function App() {

  const [info_person, setinfo_person] = useState({
    "Nom" : "Albert",
    "Genre" : "M",
    "Siècle" : "20",
    "MBTI" : "INTP",
    "Animal" : "Chat",
    "Formation" : "Polytechnique",
    "Récompense" : "Prix Nobel",
    "Nationalité" : "Allemande/Amércaine",
    "Domaine" : "Physique"

  })

  function Set_bloc(text){
    if (text.includes('/')) {
      let element = text.split('/');
      if (element[1]) {
        return <div>
          <div className='supp_mosaic2'>{element[0]}</div>
          <div className='supp_mosaic'>{element[1]}</div>
        </div>
      }
      else {
        return <div>
          <div className='supp_mosaic2'>{element[0]}</div>
          <div className='mosaic2'>ᒲᔑ╎リᓵ⍑ᔑ∷ᔑᓵℸ</div>
        </div>
      }
    }
    if (text){
      if (text.includes('/')) {
        let element = text.split('/');
        if (element[1]) {
          return <div>
            <div className='supp_mosaic'>{element[0]}</div>
            <div className='supp_mosaic'>{element[1]}</div>
          </div>
        }
        else {
          return <div>
            <div className='supp_mosaic'>{element[0]}</div>
            <div className='mosaic'>ᒲᔑ╎リᓵ⍑ᔑ∷ᔑᓵℸ</div>
          </div>
        }
      }
      else {
        return <div className='supp_mosaic'>{text}</div>
      }
      
    }
    else {
      return <div className='mosaic'>ᒲᔑ╎リᓵ⍑ᔑ∷ᔑᓵℸ</div>
    }
    
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Télécomdle</h1>
      </div>

      <div className="Box_info">
        <p>CARTE D'IDENTITE</p>
        <div className="infocontainer">
          <div className="line">
            <div className="bloc">Nom/Prénom</div>
            <div className="bloc">Genre</div>
            <div className="bloc">Siècle</div>
            <div className="bloc">MBTI</div>
            <div className="bloc">Animal de compagnie</div>
          </div>

          <div className="line"> 
            {Set_bloc(info_person["Nom"])}
            {Set_bloc(info_person["Genre"])}
            {Set_bloc(info_person["Siècle"])}
            {Set_bloc(info_person["MBTI"])}
            {Set_bloc(info_person["Animal"])}
          </div>

          <div className="line">
            <div className="bloc">Formation</div>
            <div className="bloc">Nationalité</div>
            <div className="bloc">Récompense</div>
            <div className="bloc">Domaine</div>
          </div>

          <div className="line">
          {Set_bloc(info_person["Formation"])}
          {Set_bloc(info_person["Nationalité"])}
          {Set_bloc(info_person["Récompense"])}
          {Set_bloc(info_person["Domaine"])}
          </div>
        </div>
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