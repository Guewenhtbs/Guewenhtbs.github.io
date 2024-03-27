import React from 'react';
import Popup from 'reactjs-popup';
import './Popup.css'; // Importez votre fichier CSS

function Pubpopup(info,open,setOpen) { 
    const closeModal = () => setOpen(false);
    return (
        <Popup open={open} closeOnDocumentClick onClose={closeModal} 
        position="top center"
        nested>
        <div className="modal">
            <div className="pub_container">
                <a className="close" onClick={closeModal}>&times;</a>
                <a href={info["Link"]} target="_blank" rel="noopener noreferrer">
                    <img src={info["Image"]} alt="pub de zinzin" />
                </a>
            </div>
        </div>
        </Popup>
  );
}

export default Pubpopup;
