import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/home';
import Image from './components/image';
import ImageList from './components/imageList';
import axios from 'axios';
import { useSearch, SearchProvider } from './context/SearchContext';

function InnerApp() {
  const [searchImage, setSearchImage] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { recentSearches, addSearch } = useSearch();
  const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

  const changeHandler = (e) => {
    setSearchImage(e.target.value);
  };

  const fetchImages = (query = searchImage) => {
    if (!query.trim()) return;
    setLoading(true);

    axios
      .get('https://api.unsplash.com/search/photos', {
        params: { query },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      })
      .then((response) => {
        setImages(response.data.results);
        addSearch(query);
        navigate('/imagelist');
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRecentClick = (query) => {
    setSearchImage(query);
    fetchImages(query);
  };

  return (
    <div className="App mx-2 mt-3">
      <h3 className="border border-round border-2 text-center bg-info">Image Browser</h3>
      <form onSubmit={fetchImages}>
      <div className="input-group mb-3 w-50 ms-5 position-relative">
        <input
          type="text"
          className="form-control border border-2 border-warning"
          onChange={changeHandler}
          value={searchImage}
          autoComplete="off"
        />
        <button
          type="submit"
          className="btn btn-success input-group-text border border-2 mx-2" >
          Search
        </button>

      </div>
      </form>

      {recentSearches.length > 0 && (
        <div className="ms-5 mb-3">
          <strong>Recent Searches:</strong>
          <ul className="list-group w-50">
            {recentSearches.map((item, idx) => (
              <li
                key={idx}
                className="list-group-item list-group-item-action"
                onClick={() => handleRecentClick(item)}
                style={{ cursor: 'pointer' }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image" element={<Image />} />
        <Route path="/imagelist" element={<ImageList images={images} loading={loading} />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <SearchProvider>
        <InnerApp />
      </SearchProvider>
    </Router>
  );
}

export default App;
