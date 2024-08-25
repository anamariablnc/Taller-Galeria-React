 
import React from 'react';
import './App.css';   
 

const GalleryItem = ({ alt }) => {
  return (
    <div className="gallery-item">
      <div className="image-placeholder">
        <p>{alt || 'Imagen'}</p>
      </div>
    </div>
  );
};

 
const App = () => {
  const images = [
    { id: 1, alt: 'Imagen 1' },
    { id: 2, alt: 'Imagen 2' },
    { id: 3, alt: 'Imagen 3' },
    { id: 4, alt: 'Imagen 4' },
    
   
  ];

  return (
    <div className="app">
      <h1 className="title">Galería de Imágenes</h1> {/* Título fuera del div de la galería */}
      <div className="gallery">
        {images.map((image) => (
          <GalleryItem key={image.id} alt={image.alt} />
        ))}
      </div>
    </div>
  );

}

export default App;

