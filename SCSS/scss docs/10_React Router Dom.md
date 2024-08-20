## 01. React Router Dom



##### (1) `main.jsx`

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "./scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
);
```

> BrowserRouter



##### (2) `App.jsx`

```javascript
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchedVideosPage from "./pages/SearchedVideosPage";
import VideoPage from "./pages/VideoPage";

const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/results/:input" element={<SearchedVideosPage />} />
          <Route path="video/:videoId" element={<VideoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

```

> Outlet, Route, Routes



##### (3) `NavBar` & `SideBar` 구조 생성하기 

| 파일 구조                                                    | `rfce`                                                       |
| :----------------------------------------------------------- | ------------------------------------------------------------ |
| ![image](https://github.com/user-attachments/assets/65576c64-f194-4969-bf73-0a83f090a99d)| ![image](https://github.com/user-attachments/assets/9594cb24-644c-4eed-977f-cdc327160143) |



(4) `App.jsx`

```javascript
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SearchedVideosPage from "./pages/SearchedVideosPage";
import VideoPage from "./pages/VideoPage";

import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <SideBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/results/:input" element={<SearchedVideosPage />} />
          <Route path="video/:videoId" element={<VideoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
```

