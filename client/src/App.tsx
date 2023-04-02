import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import NavBar from "./components/NavBar";
import BookDetail from "./components/BookDetails";
import UploadBook from "./components/UploadBook";
import PdfViewer from "./components/PdfViewer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/book/upload" element={<UploadBook />} />
        <Route path="/book/read" element={<PdfViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
