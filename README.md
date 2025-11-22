# **Image Browser – React App**

A responsive React application that allows users to search high-quality images, browse results, and view full-size images. Recent searches are stored globally using React Context.

---

## 1. Project Structure

```
src/
├── components/
│   ├── Home.jsx
│   ├── Image.jsx
│   ├── ImageList.jsx
│   ├── Spinner.jsx
│
├── context/
│   ├── SearchContext.jsx
│
├── App.js
├── index.js
```

---

## 2. Features

1. Search for high-quality images  
2. View full-size images with routing  
3. Store last 5 recent searches using React Context  
4. Lazy-loaded image rendering  
5. Loading spinner during API calls  
6. Responsive UI with Bootstrap  
7. Smooth navigation using React Router  

---

## 3. Component & Context Details

### 3.1 SearchContext.jsx

#### State
1. **recentSearches** (Array)  
   - Holds the 5 most recent search queries  
   - Removes duplicates  
   - Newest search appears first  

#### Function
1. **addSearch(query)**  
   - Adds a search entry  
   - Filters duplicates  
   - Limits array length to 5  
   ```js
   const updated = [query, ...prev.filter(item => item !== query)];
   return updated.slice(0, 5);
   ```

---

### 3.2 Home.jsx

Displays a simple welcome message for the application.  
No special states or logic.

---

### 3.3 Image.jsx

Handles full-size image viewing.

#### Variables
1. **location** – from `useLocation()`, gives access to URL query parameters  
2. **params** – instance of `URLSearchParams` used to read `url`  
3. **imageUrl** – the encoded full image URL from the search string  

#### Behavior
1. If no image URL is found, shows a “Go Back” prompt  
2. Decodes URL using `decodeURIComponent`  
3. Displays the image with viewport-based max-height  

---

### 3.4 ImageList.jsx

Displays search results as a grid.

#### Props
1. **images** – Array of image objects returned from API  
2. **loading** – Boolean that toggles the spinner  

#### Function
1. **handleClick(img)**  
   - Encodes the full image URL  
   - Navigates to full-view page  
   ```js
   const encodedUrl = encodeURIComponent(img.urls.full);
   navigate(`/image?url=${encodedUrl}`);
   ```

#### Behavior
1. Shows `<Spinner />` when loading  
2. Renders image cards with:  
   - Preview image  
   - Description  
   - Photographer name  
3. Entire card is clickable  

---

### 3.5 Spinner.jsx

A simple centered Bootstrap spinner used while loading data.

---

## 4. Setup Instructions

### 1. Clone repository
```sh
git clone <your-repo-url>
cd image-browser
```

### 2. Install dependencies
```sh
npm install
```

### 3. Add `.env` file (if using Unsplash API)
```
REACT_APP_UNSPLASH_API_KEY=your_api_key_here
```

### 4. Run the project
```sh
npm start
```

App runs at **http://localhost:3000**

---

## 5. How the App Works

1. User enters a search query  
2. App sends a request to the image API  
3. Results are shown in `<ImageList />`  
4. Clicking an image opens `/image?url=...`  
5. Recent searches update automatically  
6. The last 5 searches are saved globally using Context  

---

## 6. Technologies Used

1. React  
2. React Router DOM  
3. React Context API  
4. Bootstrap  
5. Unsplash API (optional)  

---

## 7. License

MIT License.
