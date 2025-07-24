import { useState } from "react";

function Gato() {
  const [gatoUrl, setGatoUrl] = useState('');

  function buscarGato() {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(res => res.json())
      .then(data => {
        setGatoUrl(data[0].url);
      });
  }

  return (
    <div className="text-center mt-4">
      <h2>Quer ver um gato?</h2>
      <button className="btn btn-primary mt-2" onClick={buscarGato}>
        Ver Gato
      </button>

      {gatoUrl && (
        <div className="mt-4 mb-5">
          <img
            src={gatoUrl}
            alt="Gato Aleatório"
            width="300"
            style={{ borderRadius: '8px' }}
          />
        </div>
      )}
    </div>
  );
}

export default Gato;
