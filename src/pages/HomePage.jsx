import React, { useEffect, useState } from "react";
import axios from "axios";

// <Navbar/> <Footer/>
import DefaultLayoutHoc from "../layout/DefaultLayout";

// Components

import HeroCarouselSlider from "../components/herocarousel/HeroCarousel";
import PosterSlider from "../components/posterslider/PosterSlider";
import EntertainmentSlider from "../components/entertainment/Entertainment";

function HomePage() {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premiereMovies, setPremiereMovies] = useState([]);
  const [onlineEvents, setOnlineEvents] = useState([]);

  useEffect(() => {
    const requestTopratedMovies = async () => {
      const topratedMovies = await axios.get(
        "http://localhost:8081/movies/toprated"
      );
      setRecommendedMovies(topratedMovies.data.data);
    };
    requestTopratedMovies();
  }, []);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const popularMovies = await axios.get(
        "http://localhost:8081/movies/popular"
      );
      setPremiereMovies(popularMovies.data.data);
    };
    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestOnlineMovies = async () => {
      const OnlineMovies = await axios.get(
        "http://localhost:8081/movies/online"
      );
      setOnlineEvents(OnlineMovies.data.data);
    };
    requestOnlineMovies();
  }, []);

  return (
    <>
      <HeroCarouselSlider />
      <div className="container mx-auto px-2 md:px-12 my-8 ">
        <PosterSlider
          title="Recommended Movies"
          posters={recommendedMovies}
          isdark={false}
        />
      </div>

      <div className="container mx-auto px-1 md:px-12 my-8 ">
        <h1 className="text-gray-800 font-bold text-2xl my-4">
          The best of entertainment
        </h1>
        <EntertainmentSlider />
      </div>

      <div className="bg-premier-800  mx-auto w-full px-4 md:px-12 my-8">
        <PosterSlider
          title="Premieres"
          posters={premiereMovies}
          isDark={true}
        />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PosterSlider
          title="Online Events"
          posters={onlineEvents}
          isdark={false}
        />
      </div>
    </>
  );
}

export default DefaultLayoutHoc(HomePage);
