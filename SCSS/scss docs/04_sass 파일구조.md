#### 01. SASS 파일 구조

| (1)                                                          | (2)                                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![image-20240818152704847](../../../../AppData/Roaming/Typora/typora-user-images/image-20240818152704847.png) | ![image-20240818152646343](../../../../AppData/Roaming/Typora/typora-user-images/image-20240818152646343.png) |



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



