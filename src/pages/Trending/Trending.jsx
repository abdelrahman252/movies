import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleCard from "../../components/singleCard/SingleCard";
import CustomPagination from "../../components/Pagination/CustomPagination";
const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setContent(data.results);
  };
  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <div>
      <span className="pageTitle">Trending Today</span>
      <div
        className="trending"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {content &&
          content.map((c) => (
            <SingleCard
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
