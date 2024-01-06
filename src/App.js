/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/FooterComponent';
import MovieComponent from './components/MovieComponent';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Details from './pages/Details';
import Add from './pages/Add';

const exampleMovie = {
  title: 'Film',
  poster: 'obrazek.png',
  rating: 10,
};

const numberOfCopies = 10;

const movies = Array(numberOfCopies).fill(exampleMovie);

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home movies={movies} />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/details" element={<Details />}  />
            <Route path="/add" element={<Add />}  />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;