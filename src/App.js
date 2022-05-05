import React from 'react'
import { Routes, Route } from "react-router-dom";
import "./App.css"
import MainScreen from './MainScreen';
import PageNotFound from './pages/PageNotFound';
import ViewMore from './pages/ViewMore';

function App() {
  return (
    <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/view" element={<ViewMore />} />
      </Routes>
  );
}

export default App;
