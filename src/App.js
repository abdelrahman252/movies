import Header from "./components/Header/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import { Container } from "@mui/material";
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Search from "./pages/search/Search";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
