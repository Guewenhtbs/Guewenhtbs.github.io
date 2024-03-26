import React, {useState} from 'react';
import './logo.svg';
import './App.css';
import SearchBar from './searchbar';
import Historique from './Historique';


function App() {

  const [info_person, setinfo_person] = useState({
    "Nom" : false,
    "Photo":false,
    "Genre" : "M",
    "Siècle" : "20",
    "MBTI" : "INTP",
    "Animal" : "Chat",
    "Formation" : "Polytechnique",
    "Récompense" : "Prix Nobel",
    "Nationalité1" : "Allemande",
    "Nationalité2" : "Américaine",
    "Domaine" : "Physique",
    "Funfact" : false

  })

  function Set_bloc(text){
    if (text){
      return <div className='supp_mosaic'>{text}</div>
    }
    else {
      return <div className='mosaic'>ᒲᔑ╎リᓵ⍑ᔑ∷ᔑᓵℸ</div>
    }
  }

  function Set_image(text){
    if (text){
      return <div className="photo_container"><img src={text} alt="photo du génie"></img></div>
    }
    else {
      return <div className="photo_container"><img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/No_avatar.png" alt="mais qui est-ce??"></img></div>
    }
  }

  function Set_funfact(text){
    if (text){
      return <div className='funfact_supp_mosaic'>{text}</div>
    }
    else {
      return <div className='funfact_mosaic'>ᒲᔑ╎リᓵ⍑ᔑ∷</div>
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Télécomdle</h1>
      </div>
      <div className="Box_info">
      <div className="name_photo_container">
      {Set_image(info_person["Photo"])}
      <div className="bloc">Nom/Prénom</div>
      {Set_bloc(info_person["Nom"])}
      </div>
        <div className="infocontainer">
          <div className="line">
            <div className="bloc">Genre</div>
            <div className="bloc">Siècle</div>
            <div className="bloc">MBTI</div>
            <div className="bloc">Animal de compagnie</div>
          </div>

          <div className="line"> 
            {Set_bloc(info_person["Genre"])}
            {Set_bloc(info_person["Siècle"])}
            {Set_bloc(info_person["MBTI"])}
            {Set_bloc(info_person["Animal"])}
          </div>

          <div className="line">
            <div className="bloc">Formation</div>
            <div className="bloc">1ere Nationalité</div>
            <div className="bloc">2eme Nationalité</div>
            <div className="bloc">Récompense</div>
            <div className="bloc">Domaine</div>
          </div>

          <div className="line">
          {Set_bloc(info_person["Formation"])}
          {Set_bloc(info_person["Nationalité1"])}
          {Set_bloc(info_person["Nationalité2"])}
          {Set_bloc(info_person["Récompense"])}
          {Set_bloc(info_person["Domaine"])}
          </div>
          
        <div className="funfact_container">
        <div className="funfact_title">Funfact</div>
        {Set_funfact(info_person["Funfact"])}
        
        </div>
        </div>
      </div>

      <SearchBar />
      <Historique />
    </div>
  );
}

export default App;