import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/FooterComponent';
import MovieComponent from './components/MovieComponent';


const exampleMovie = {
  title: 'Film',
  poster: 'obrazek.png',
  rating: 10,
};

const numberOfCopies =10;

const movies = Array(numberOfCopies).fill(exampleMovie);

function App() {
  return (
    <>
      <Header />

      <div className='home'>
        <div className='movie-list'>
          {movies.map((movie, index) => (
            <MovieComponent key={index} {...movie} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
