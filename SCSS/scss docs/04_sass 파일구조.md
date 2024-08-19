#### 01. SASS 파일 구조

| (1)                                                          | (2)                                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![image](https://github.com/user-attachments/assets/c31e93b5-f31d-43c8-bb13-47841b69cf6a) | ![image](https://github.com/user-attachments/assets/c42e5bfc-a616-4429-ac06-9c08d5dfcf73) |



#### 02. `@import` 해서 가져오기

```scss
@import "./abstracts/variables";
@import "./abstracts/mixins";

@import "./layout/navBar/leftNav";
@import "./layout/navBar/navBar";
@import "./layout/navBar/rightNav";
@import "./layout/navBar/searchBar";

@import "./layout/sideBar/bigSideBar";
@import "./layout/sideBar/sideBar";
@import "./layout/sideBar/smallSideBar";

@import "./pages/mainPage";
@import "./pages/searchedVideosPage";
@import "./pages/videoPage";
```

```javascript
//main.jsx
import "./scss/main.scss";
```



