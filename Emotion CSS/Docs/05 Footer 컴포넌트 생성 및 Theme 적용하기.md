### 04 Global Style 적용하기

> 글로벌 CSS를 넣을 때는 리셋 같은 CSS 나 폰트 페이스 것들을 넣을 때는 글로벌 컴포넌트에 넣으면 된다. 

```REACT
import { Global, css } from '@emotion/react'

render(
	<div>
    	<Global style={`
                .some-class {
                    color: hotpink !important;
                }
            `}
    </div>
)
```

---

``` react
import { Global, css } from "@emotion/react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import BookDetailPage from "./pages/BookDetailPage";
import SearchPage from "./pages/SearchPage";

const Layout = () => {
  return (
    <div>
      <Global
        styles={css`
          body {
            background-color: white;
            color: black;
            transition-duration: 0.2s;
            transition-property: background-color, color;
          }
          a {
            color: black;
            text-decoration: none;
          }
          ul {
            list-style: none;
            padding: 0;
          }
        `}
      />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route index element={<SearchPage />}></Route>
        <Route path="/book/:bookId" element={<BookDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

* CSS는 emotion react에서 가져오고 스타일ㅇ르 자바스크립트로 한다.
* 글로벌 스타일로 주면 어떠한 컴포넌트에서 a 태그든, ul 태그든 해당 코드 스타일이 들어가게 되는 것이다.
