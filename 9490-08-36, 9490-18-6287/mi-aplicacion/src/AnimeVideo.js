import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CharacterPage() {
  const [characterData, setCharacterData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://anapioficeandfire.com/api/characters/1')
      .then((response) => {
        setCharacterData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching character data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Personaje de Juego de Tronos</h2>
      {loading ? (
        <p>Cargando datos del personaje...</p>
      ) : (
        <div>
          <h3>Nombre: {characterData.name || 'Bran Stark'}</h3>
          <p>Género: {characterData.gender}</p>
          <p>Casa: {characterData.house}</p>
          <p>Títulos: {characterData.titles && characterData.titles.length > 0 ? characterData.titles.join(', ') : 'Ninguno'}</p>
          <p>Alias: {characterData.aliases && characterData.aliases.length > 0 ? characterData.aliases.join(', ') : 'Ninguno'}</p>
        </div>
      )}
     
    </div>
  );
}

export default CharacterPage;