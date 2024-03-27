const CoolButton = ({ className, onClick, name }) => {
    console.log(name)
    return (
      <button className={`coolbutton ${className}`} onClick={onClick}>
        {name}
      </button>
    );
  };
  
  export default CoolButton;