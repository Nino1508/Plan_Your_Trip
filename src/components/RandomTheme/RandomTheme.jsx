import React, { useState, useEffect } from 'react';
import './RandomTheme.css';

const images = [
'/imagenes/cappadocia.jpg',
'/imagenes/matterhorn.jpg',
'/imagenes/nihn.jpg',
'/imagenes/pai.jpg',
'/imagenes/paris.jpg',
'/imagenes/playasiciliana.jpg',
'/imagenes/santorini.jpg',
'/imagenes/scotland.jpg',
'/imagenes/tajmahal.jpg',
'/imagenes/whiteheavenbeach.jpg'
];

const RandomTheme = () => {
  const [bgImage, setBgImage] = useState('');

  const handleImageChange = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setBgImage(images[randomIndex]);
  };

  useEffect(() => {
    handleImageChange();
  }, []);

  useEffect(() => {
    if (bgImage) {
      document.body.className = 'background';
      document.body.style.backgroundImage = `url(${bgImage})`;
    }
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, [bgImage]);

  return (
    <div className="button-container" style={{ textAlign: 'center', margin: '20px 0' }}>
      <button className="theme-button" onClick={handleImageChange}>
        RANDOM THEME
      </button>
    </div>
  );
};

export default RandomTheme;
