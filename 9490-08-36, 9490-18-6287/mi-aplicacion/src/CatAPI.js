import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CatAPI() {
  const [catImages, setCatImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((response) => {
        setCatImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching cat images:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Imágenes de Gatos</h2>
      {loading ? (
        <p>Cargando imágenes...</p>
      ) : (
        <div className="cat-images">
          {catImages.map((cat, index) => (
            <div key={index} className="cat-image">
              <img src={cat.url} alt={`Cat ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CatAPI;





