import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import './heroBanner.scss'

const HeroBanner = () => {
  const [backg, setBackg] = useState("");
  const [query, setQuery] = useState("");
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");
  const navigate = useNavigate();

  const searchQueryHandler = (evento) => {
    if(evento.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  }

  useEffect(() => {
    const bg =
        url.backdrop +
        data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackg(bg);
  }, [data]);

  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="title">
            Movies, Series and people to discover.
            Explore now.
            </span>
            <div className="searchInput">
              <input type="text" placeholder='Movie or serie name' onKeyUp={searchQueryHandler} onChange={(evento) => setQuery(evento.target.value)}/>
              <button>Search</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner