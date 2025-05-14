import React, { useState } from 'react';

const RandomTheme = () => {
  const [bgImage, setBgImage] = useState('');

  const images = [
    '/imagenes/matterhorn.jpg',
    '/imagenes/playasiciliana.jpg',
    '/imagenes/whitehavenbeach.jpg',
    '/imagenes/tajmahal.jpg'
  ];

  const handleImageChange = () => {
    const index = Math.floor(Math.random() * images.length);
    setBgImage(images[index]);
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="bottom-button" style={{ position: 'absolute', bottom: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: 'rgba(51,51,51,0.7)', color: '#fff', border: 'none', borderRadius: '5px' }} onClick={handleImageChange}>
          RANDOM THEME
        </button>
      </div>
    </div>
  );
};

export default RandomTheme;
