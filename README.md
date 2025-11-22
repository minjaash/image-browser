<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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
>>>>>>> origin/main
