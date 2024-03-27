import React from 'react';
import Popup from 'reactjs-popup';
import './Popup.css'; // Importez votre fichier CSS

function Pubpopup(link, open, setOpen) { 
    const closeModal = () => setOpen(false);
    return (
        
        <Popup open={open} closeOnDocumentClick onClose={closeModal} 
        position="top center"
        nested>
        <div className="modal">
            
            <div className="pub_container">
                <a className="close" onClick={closeModal}>
                &times;
                </a>
                <img src={link} alt="pub de zinzin" />
            </div>
        </div>
        </Popup>
  );
}

export default Pubpopup;
