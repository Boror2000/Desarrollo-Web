import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DogImagePage() {
  const [dogImageUrl, setDogImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        setDogImageUrl(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Imagen Aleatoria de Perro</h2>
      {loading ? (
        <p>Cargando imagen...</p>
      ) : (
        <div>
          <img src={dogImageUrl} alt="Perro Aleatorio" />
        </div>
      )}
      
    </div>
  );
}

export default DogImagePage;