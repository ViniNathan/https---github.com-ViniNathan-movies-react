import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useFetch from '../../../hooks/useFetch'
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import './heroBanner.scss'

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/popular" || "/movie/upcoming");
  const navigate = useNavigate();

  useEffect(() => {
    const bg =
        url.backdrop +
        data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const handleSearchButtonClick = () => {
    searchQueryHandler();
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleInputKeyUp = (event) => {
    if (event.key === "Enter") {
      searchQueryHandler();
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
            <Img src={background}/>
        </div>
      )}

    <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Find your favorite movies and series.
            Explore now.
            </span>
            <div className="searchInput">
              <input type="text" placeholder='Search for movies or series...' value={query} onChange={handleInputChange} onKeyUp={handleInputKeyUp}/>
              <button onClick={handleSearchButtonClick}>Search</button>
            </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner;
