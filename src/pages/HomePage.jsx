import React, { useState } from "react";

// <Navbar/> <Footer/>
import DefaultLayoutHoc from "../layout/DefaultLayout";

// Components
import Entertainment from "../components/entertainment/Entertainment";
import HeroCarousel from "../components/herocarousel/HeroCarousel";
import PosterSlider from "../components/posterslider/PosterSlider";

function HomePage() {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premiereMovies, setPremiereMovies] = useState([]);
  const [onlineEvents, setOnlineEvents] = useState([]);

  return (
    <>
      <HeroCarousel />
      <div className="mx-auto px-4 md:px-12 py-4 ">
        <h1 className="text-gray-800 font-bold sm:ml-4 ml-0">
          The best of entertainment
        </h1>
      </div>
      <Entertainment />

      <PosterSlider
        title="Recommended Movies"
        description=" List of recommended movies"
        poster={recommendedMovies}
        isdark={false}
      />

      <div className="mx-auto px-4 md:px-12 py-4 ">
        <img src="" alt="Razorpay" className="w-full h-full" />
      </div>
      <PosterSlider
        title="Premiere Movies"
        description=" List of Premiere movies"
        poster={premiereMovies}
        isdark={true}
      />
      <PosterSlider
        title="Online Events"
        description=" List of Online Events"
        poster={onlineEvents}
        isdark={false}
      />
    </>
  );
}

export default DefaultLayoutHoc(HomePage);
