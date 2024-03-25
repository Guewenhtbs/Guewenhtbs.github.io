import React, { useState, useEffect } from 'react';
import './BlocTexte.css';

function BlockInfo() {
  // Define state variables and setter functions for each state
  const [info_person, setinfo_person] = useState({
    "Nom" : false,
    "Genre" : "M",
    "Siècle" : "20",
    "MBTI" : "INTP",
    "Animal" : "Chat",
    "Formation" : "Polytechnique",
    "Récompense" : "Prix Nobel",
    "Nationalité1" : "Allemande",
    "Nationalité2" : "Américaine",
    "Domaine" : "Physique"

  })

  function Set_bloc(text){
    if (text){
      return <div className='supp_mosaic'>{text}</div>
    }
    else {
      return <div className='mosaic'>ᒲᔑ╎リᓵ⍑ᔑ∷ᔑᓵℸ</div>
    }
  }

  return (
    <div className="App">
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
    </div>
  );
}

export default BlockInfo;