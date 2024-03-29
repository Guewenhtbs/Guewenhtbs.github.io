import React, {useState} from 'react';
import './logo.svg';
import './App.css';
import SearchBar from './searchbar';
import Historique from './Historique';
import Statistique from './Statistique';
import Pubpopup from './Popup';
import { requeteClient } from './Requete';
import CoolButton from './boutons';

function App() {

  const [info_person, setinfo_person] = useState({
    "Nom" : false,
    "Photo": false,
    "Genre" : "M",
    "Siècle" : "20",
    "MBTI" : "INTP",
    "Animal" : false,
    "Formation" : "Polytechnique",
    "Récompense" : false,
    "Nationalité" : "Allemande/",
    "Domaine" : "Physique"


  })
  const [pub_open,setpub_open] = useState(true)
  const [pub_info,setpub_info] = useState({
    "Image" : 'https://media.gqmagazine.fr/photos/5cdade1acbf34364716160e4/16:9/w_1280,c_limit/shaveballs.jpg',
    "Link" : 'https://media.gqmagazine.fr/photos/5cdade1acbf34364716160e4/16:9/w_1280,c_limit/shaveballs.jpg'
  })

  function Set_bloc(text){
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
      return <div className='funfact_mosaic'>⍑ᒷꖎꖎ𝙹ᒲ||リᔑᒲᒷ╎ᓭ∴╎リ↸∴⍑ᒷᒷꖎᔑリ↸i∴ᔑリℸℸ𝙹ᓭℸ𝙹!¡ꖎ╎ᓭℸᒷリℸ𝙹||𝙹⚍ᒲ||リᔑᒲᒷ╎ᓭ∴╎リ↸∴⍑ᒷᒷᔑリℸℸ𝙹ᓭℸ𝙹!¡ꖎ╎ᓭℸᒷリ∴⍑ᒷᒷꖎᔑリ↸i∴ᔑリℸℸ𝙹ᓭℸ𝙹!¡ꖎ╎ᓭℸᒷリℸ𝙹||𝙹⚍∴╎</div>
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Télécomdle</h1>
      </div>
      <div className="Box_info">
        <div display='flex'>
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
        <div className="funfact_container">
          {Set_funfact(info_person["Funfact"])}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop:20}}>
      <CoolButton className="coolbutton" name="Nouvelle partie" onClick={() => {requeteClient("newgame");}} />
      <SearchBar />
      <CoolButton className="coolbutton" onClick={() => {requeteClient("abandon");}} name="Langue au chat"/>
      </div>
      <Historique />
      <Statistique />
      </div>
    {Pubpopup(pub_info,pub_open,setpub_open)}
  </div>
  );
}

export default App;