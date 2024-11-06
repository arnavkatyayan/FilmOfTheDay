import React, { useState, useEffect } from "react";
import { languages, genres, posters, runtimes, userRatings, years } from "./ReusableObjects";
import './App.css';
import Select from "react-select";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import axios from "axios";
import MovieComp from "./MovieComp";

function MainPage() {
  const [background, setBackground] = useState(posters[0]);
  const [genre, setGenre] = useState(null);
  const [language, setLanguage] = useState(null);
  const [year, setYear] = useState(null); // Replace rating with year
  const [userRating, setUserRating] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const [openMovieComp, setOpenMovieComp] = useState(false);
  // Change background every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextBackground = posters[Math.floor(Math.random() * posters.length)];
      setBackground(nextBackground);
    }, 5000); // 10 seconds in milliseconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const handleLanguage = (option) => setLanguage(option);
  const handleGenres = (option) => setGenre(option);
  const handleYear = (option) => setYear(option); // Adjusted for year
  const handleUserRatings = (option) => setUserRating(option);

  const getMovie = async () => {
    setOpenMovieComp(true);
    const requestObj = {
      language: language?.value,
      genre: genre?.value,
      year: year?.value,  // Adjusted for year
      userrating: userRating?.value,
    };

    try {
      const ans = await axios.get('http://127.0.0.1:5000/test_api', { params: requestObj });
      const randomSelection = getRandomMovie(ans.data);
      console.log(randomSelection);
      setMovieList(randomSelection);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const getRandomMovie = (movies) => {

    return movies[Math.floor(Math.random() * movies.length)];
  }
  const handleReset = () => {
    setGenre(null);
    setLanguage(null);
    setYear(null);
    setUserRating(null);
    setMovieList([]);
  }


  return (
    <div className="Main-App" style={{ backgroundImage: background }}>
      {!openMovieComp ? 
      <div className="box">
        <div className="input-boxes">
          <Select
            placeholder="Enter the Language"
            options={Object.keys(languages).map((key) => ({ label: key, value: languages[key] }))}
            value={language}
            onChange={handleLanguage}
          />
          <Select
            placeholder="Enter the Genre"
            options={Object.keys(genres).map((key) => ({ label: key, value: genres[key] }))}
            value={genre}
            onChange={handleGenres}
          />
          <Select
            placeholder="Select the Year"  // Adjusted placeholder
            options={Object.keys(years).map((key) => ({ label: key, value: years[key] }))}  // Adjusted for year
            value={year}
            onChange={handleYear}  // Adjusted for year
          />
          <Select
            placeholder="Enter the User Ratings"
            options={Object.keys(userRatings).map((key) => ({ label: key, value: userRatings[key] }))}
            value={userRating}
            onChange={handleUserRatings}
          />
          <Button variant="success" onClick={getMovie}>Movie Time!</Button>
          <Button variant="danger" onClick={handleReset}>Reset</Button>
        </div>
      </div>:<MovieComp movieList={movieList} setOpenMovieComp={setOpenMovieComp} />}
    </div>
  );
}

export default MainPage;
