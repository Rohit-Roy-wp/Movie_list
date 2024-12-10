import { useState } from "react";

const Movie_Card = (props) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const [data, setData] = useState(props.Data);

  return (
    <>
    <h1 style={{backgroundColor:"black", color:"white", textAlign:"center"}}>Movie Details</h1>
    <div
      className="card-container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      {data.map((item) => (
        <div className="card" style={{ width: "18rem" }} key={item} >
          <img
            src={item.image}
            style={{ width: "18rem", height: "23rem"}}
            className="card-img-top"
            alt={`${item.title} Poster`}
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">Year: {item.year}</p>
            <p className="card-text">Genre: {item.genre}</p>
            <p className="card-text">Director: {item.director}</p>
            <p className="card-text">Cast : {item.cast}</p>
            <p className="card-text">Rating: {item.imdbRating}</p>
            <a href="#" className="btn btn-primary">
              Watch Now
            </a>
            <a href="#" className="btn btn-success m-2">
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Movie_Card;
