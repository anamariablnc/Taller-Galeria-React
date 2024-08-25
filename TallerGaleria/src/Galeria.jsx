// src/Galeria.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import './app.css';

function Galeria({ images }) {
  return (
    <div className="gallery">
      {images.map((image) => (
        <Image key={image.id} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

Galeria.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Galeria;
