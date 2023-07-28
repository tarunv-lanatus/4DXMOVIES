import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { createTheme } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Fixed import and alias

import { Homepage } from "./pages/home/Home";
import { Editpage } from "./pages/edit/Edit";
import { Sortpage } from "./pages/sort/Sort";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/edit" element={<Editpage />} />
          <Route path="/sort" element={<Sortpage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
