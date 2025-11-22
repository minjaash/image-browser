import React from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from './spinner';

function ImageList({ images, loading }) {
  const navigate = useNavigate();

  if (loading) return <Spinner />;

  const handleClick = (img) => {
    const encodedUrl = encodeURIComponent(img.urls.full);
    navigate(`/image?url=${encodedUrl}`);
  };

  return (
    <div className="container">
      <h4 className="my-3">Search Results</h4>
      <div className="row">
        {images.map((img) => (
          <div className="col-md-4 mb-4" key={img.id}>
            <div
              className="card h-100"
              style={{ cursor: 'pointer' }}
              onClick={() => handleClick(img)}
            >
              <img
                src={img.urls.regular}
                className="card-img-top"
                alt={img.alt_description || 'Image'}
                loading="lazy"
              />
              <div className="card-body">
                <p className="card-text">{img.alt_description || 'No description'}</p>
                <small className="text-muted">By {img.user.name}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageList;
