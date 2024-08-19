## 01. React Router Dom



##### (1) `main.jsx`

```react
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

```react
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
| ![image-20240819104549488](../../../../AppData/Roaming/Typora/typora-user-images/image-20240819104549488.png) | ![image-20240819104617921](../../../../AppData/Roaming/Typora/typora-user-images/image-20240819104617921.png) |



(4) `App.jsx`

```react
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

