import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BibliaPage() {
  const [verse, setVerse] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reemplaza 'nvi' con la versión de la Biblia que deseas
    const bibleVersion = 'nvi';

    axios.get(`https://www.abibliadigital.com.br/api`)
      .then((response) => {
        setVerse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Bible verse:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Versículo de la Biblia Aleatorio</h2>
      {loading ? (
        <p>Cargando versículo...</p>
      ) : (
        <div>
          <p>
            <strong>{verse.book} {verse.chapter}:{verse.number}</strong>
          </p>
          <p>{verse.text}</p>
        </div>
      )}
      <footer>
        <p>Nombre del estudiante: Asbel Sosa, Brandon Boror</p>
        <p>Carnet: 9490-08-36, 9490-18-6287</p>
      </footer>
    </div>
  );
}

export default BibliaPage;