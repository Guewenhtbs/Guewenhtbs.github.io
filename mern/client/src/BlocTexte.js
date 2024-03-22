import React, { useState, useEffect } from 'react';
import './BlocTexte.css';

// Define conditions for each state
const conditions = [
  true,   // condition1
  false,  // condition2
  false,  // condition3
  false,  // condition4
  false,  // condition5
  false,  // condition6
  false,  // condition7
  false,  // condition8
  false,  // condition9
];

function App() {
  // Define state variables and setter functions for each state
  const [state1, setState1] = useState('mosaic');
  const [state2, setState2] = useState('mosaic');
  const [state3, setState3] = useState('mosaic');
  const [state4, setState4] = useState('mosaic');
  const [state5, setState5] = useState('mosaic');
  const [state6, setState6] = useState('mosaic');
  const [state7, setState7] = useState('mosaic');
  const [state8, setState8] = useState('mosaic');
  const [state9, setState9] = useState('mosaic');

  // Function to handle conditions and update states accordingly
  const handleCondition = () => {
    conditions.forEach((condition, index) => {
      // Check each condition and update corresponding state
      if (condition) {
        switch (index) {
          case 0:
            setState1('supp_mosaic');
            break;
          case 1:
            setState2('supp_mosaic');
            break;
          case 2:
            setState3('supp_mosaic');
            break;
          case 3:
            setState4('supp_mosaic');
            break;
          case 4:
            setState5('supp_mosaic');
            break;
          case 5:
            setState6('supp_mosaic');
            break;
          case 6:
            setState7('supp_mosaic');
            break;
          case 7:
            setState8('supp_mosaic');
            break;
          case 8:
            setState9('supp_mosaic');
          default:
            break;
        }
      }
    });
  }

  // Call handleCondition function when component mounts
  useEffect(() => {
    handleCondition();
  }, []);

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
      <div className={state1}>Albert Einstein</div>
      <div className={state2}>Male</div>
      <div className={state3}>20</div>
      <div className={state4}>INTP</div>
      <div className={state5}>Chat</div>
    </div>

    <div className="line">
      <div className="bloc">Formation</div>
      <div className="bloc">Nationalité</div>
      <div className="bloc">Récompense</div>
      <div className="bloc">Domaine</div>
    </div>

    <div className="line">
      <div className={state6}>Polytechnique</div>
      <div className={state7}>Allemande/Américane</div>
      <div className={state8}>Prix Nobel</div>
      <div className={state9}>Physique</div>
    </div>
  </div>
  );
}

export default App;