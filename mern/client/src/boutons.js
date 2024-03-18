function BoutonAbandon(abandon) {
    return (
      <button onClick={abandon}>
        Langue au chat?
      </button>
    );
  };
  

function BoutonNewGame(newGame) {
    return (
      <button onClick={newGame}>
        Nouvelle partie
      </button>
    );
  };

export default function App() {
function abandon(){       
};
function newGame(){
};

return (
    <div>
    <h1>ouaaaaaais</h1>
    <BoutonNewGame newGame={newGame}/>
    <BoutonAbandon abandon={abandon} />
    </div>
);
};  