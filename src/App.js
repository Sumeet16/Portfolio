import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import "./App.css"
import MainScreen from './MainScreen';
import ViewMore from './pages/ViewMore';

function App() {
  return (
    <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/view" element={<ViewMore />} />
      </Routes>
  );
}

export default App;
