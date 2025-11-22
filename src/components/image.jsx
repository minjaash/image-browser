import { useNavigate, useLocation } from 'react-router-dom';

function Image() {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const imageUrl = params.get('url');

  if (!imageUrl) {
    return (
      <div className="container mt-3">
        <p>No image URL provided. <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate(-1)}>Go back</span>.</p>
      </div>
    );
  }

  return (
    <div className="container p-3" style={{ maxHeight: '100vh' }}>
      <img
        src={decodeURIComponent(imageUrl)}
        alt="Full size"
        className="img-fluid mx-auto d-block"
        style={{ maxHeight: '100vh', objectFit: 'contain' }}
      />
    </div>
  );
}

export default Image;
