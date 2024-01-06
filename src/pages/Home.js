import React from 'react';
import '../App';
import MovieComponent from '../components/MovieComponent';

const exampleMovie = {
    title: 'Film',
    poster: 'obrazek.png',
    rating: 10,
  };
  
  const numberOfCopies =10;
  
  const movies = Array(numberOfCopies).fill(exampleMovie);

function Home() {
    return (
      <div className='home'>
        <div className='movie-list'>
          {movies.map((movie, index) => (
            <MovieComponent key={index} {...movie} />
          ))}
        </div>
      </div>
    );
  }


  
export default Home;