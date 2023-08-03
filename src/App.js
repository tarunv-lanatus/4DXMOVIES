import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/home/Home";
import { Editpage } from "./pages/edit/Edit";
import { MovieItem } from "./pages/movieItem/MovieItem";
import { EditById } from "./pages/editById/EditById";
import { MovieData } from "./context/MovieData";
import { ErrorPage } from "./pages/errorPage/Error";

function App() {
  return (
    <MovieData>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies/:movie_id" element={<MovieItem />} />
          <Route path="/edit/:movie_id" element={<EditById />} />
          <Route path="/edit" element={<Editpage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </MovieData>
  );
}

export default App;
