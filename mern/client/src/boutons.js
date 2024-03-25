import { requeteClient } from './Requete.js';


function BoutonAbandon() {
  const handleClick = () => {
    requeteClient("abandon");
  };
    return (
      <button onClick={handleClick}>
        Langue au chat?
      </button>
    );
  };
  

function BoutonNewGame() {
  const handleClick = () => {
    requeteClient("newgame");
  };
    return (
      <button onClick={handleClick}>
        Nouvelle partie
      </button>
    );
  };

export default function App() {

return (
    <div>
    <h1>ouaaaaaais</h1>
    <BoutonNewGame />
    <BoutonAbandon />
    </div>
);
};  