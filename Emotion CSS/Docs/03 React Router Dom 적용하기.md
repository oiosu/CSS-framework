### 03 React Router Dom 

```react
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import BookDetailPage from "./pages/BookDetailPage";

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/book/:bookId" element={<BookDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

