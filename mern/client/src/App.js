import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './searchbar';
import Historique from './Historique';
import Statistique from './Statistique';
import Pubpopup from './Popup';
import { requeteClient } from './Requete';
import CoolButton from './boutons';

function App() {

  const [info_person, setinfo_person] = useState({
    "Nom": false,
    "Sexe": false,
    "Animal": false,
    "MBTI": false,
    "Siecle": false,
    "Nationalite": false,
    "Domaine": false,
    "Formation": false,
    "Recompense": false,
    "Image": false,   
    "Funfact": false
  })
  const [pub_open,setpub_open] = useState(true)
  const [pub_info,setpub_info] = useState({
    "Image" : 'https://media.gqmagazine.fr/photos/5cdade1acbf34364716160e4/16:9/w_1280,c_limit/shaveballs.jpg',
    "Link" : 'https://media.gqmagazine.fr/photos/5cdade1acbf34364716160e4/16:9/w_1280,c_limit/shaveballs.jpg'
  })

  const [popupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/affichage');
        const newData = response.data;
        setinfo_person(newData)
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
  }, [info_person]); // Déclencher l'effet à chaque fois que les données changent

  function Set_bloc(text){
    if (text){
      if (text.includes('/')) {
        let element = text.split('/');
        if (element[1]) {
          return <div>
            <div className='supp_mosaic2'>{element[0]}</div>
            <div className='supp_mosaic2'>{element[1]}</div>
          </div>
        }
        else {
          return <div>
            <div className='supp_mosaic2'>{element[0]}</div>
            <div className='mosaic2'>ᒲᔑ╎ᓵℸ</div>
          </div>
        }
      }
      else {
        return <div className='supp_mosaic'>{text}</div>
      }
      
    }
    else {
      return <div className='mosaic'>ᒲᔑ╎リᓵ</div>
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
      return <div className='funfact_mosaic'>⍑ᒷꖎꖎ𝙹ᒲ||リᔑᒲᒷ╎ᓭ∴╎リ↸∴⍑ᒷᒷꖎᔑリ↸ꖎᔑリ↸i∴ᔑリℸℸᒷリℸ𝙹||𝙹⚍ᒲ||リᔑᒲᒷ╎ᓭ∴╎リ↸∴⍑ᒷᒷᔑリℸℸ𝙹ᓭℸ𝙹!¡ꖎ╎ᓭℸᒷリ∴⍑ᒷᒷꖎᔑリ↸i∴ᔑリℸℸ𝙹ᓭℸ𝙹!¡ꖎ╎ᓭℸᒷリℸ𝙹||𝙹⚍∴╎</div>
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
            {Set_image(info_person["Image"])}
            <div className="bloc" style={{marginBottom:10}}>Nom/Prénom</div>
            {Set_bloc(info_person["Nom"])}
          </div>
          <div className="infocontainer">
            <div className="line">
              <div className="bloc">Sexe</div>
              <div className="bloc">Siecle</div>
              <div className="bloc">Nationalite</div>
              <div className="bloc">Animal de compagnie</div>
            </div>
    
            <div className="line"> 
              {Set_bloc(info_person["Sexe"])}
              {Set_bloc(info_person["Siecle"])}
              {Set_bloc(info_person["Nationalite"])}
              {Set_bloc(info_person["Animal"])}
            </div>

            <div className="line">
              <div className="bloc">Domaine</div>
              <div className="bloc">MBTI</div>
              <div className="bloc">Formation</div>
              <div className="bloc">Recompense</div>
            </div>

            <div className="line" style={{paddingBottom:25}}>
              {Set_bloc(info_person["Domaine"])}
              {Set_bloc(info_person["MBTI"])}
              {Set_bloc(info_person["Formation"])}
              {Set_bloc(info_person["Recompense"])}
            </div>
        </div>
        <div className="funfact_container">
          {Set_funfact(info_person["Funfact"])}
        </div>
      </div>
      <div className="AboutUs"  onClick={togglePopup}>⭐</div>
      <div className={popupVisible ? "popup-rectangle" : ""}>
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