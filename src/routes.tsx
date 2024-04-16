import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Italiana } from "./pages/Categories/Italianas";
import { Japonesa } from "./pages/Categories/Japonesas";

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/italiana" element={<Italiana />} />
    <Route path="/japonesa" element={<Japonesa />} />
  </Routes>
);
