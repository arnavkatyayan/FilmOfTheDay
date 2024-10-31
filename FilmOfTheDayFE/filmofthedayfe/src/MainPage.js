import React from "react";
import { useState, useEffect } from "react";
import { languages, genres, ratings, posters } from "./ReusableObjects";
import './App.css';

function MainPage() {
    const [background, setBackground] = useState(posters[0]);

  // Change background every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextBackground = posters[Math.floor(Math.random() * posters.length)];
      setBackground(nextBackground);
    }, 5000); // 10 seconds in milliseconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

    return(
        <div className="Main-App" style={{ backgroundImage: background }}>
            <div className="box">
                
            </div>
        </div>
    )
}
export default MainPage;