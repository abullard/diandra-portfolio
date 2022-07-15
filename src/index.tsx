import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Art from './pages/Art';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Credits from './pages/Credits';
import { Photography } from './pages/Photography';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="photography" element={<Photography />}></Route>
            <Route path="art" element={<Art />}></Route>
            <Route path="credits" element={<Credits />}></Route>
        </Routes>
    </BrowserRouter>
);
