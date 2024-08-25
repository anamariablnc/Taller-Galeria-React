 
import React from 'react';
import PropTypes from 'prop-types';
// Comente la llamada al archivo image ya que aun no esta creado...Asi no va a dar error en la ejecucion
//import Image from './Image';  
import './App.css';

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
