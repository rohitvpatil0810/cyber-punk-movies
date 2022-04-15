import React from "react";

export default function Card(props) {
  return (
    <div className="relative group rounded-lg w-fit">
      <div className="absolute -inset-0.5 bg-cyan-700 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 group-hover:scale-102"></div>
      <div className="relative bg-gradient-to-tl from-cyan-600 grid grid-cols-3 my-6 rounded-lg group-hover:scale-102 transition duration-1000">
        <div className="col-span-1 flex justify-center items-center">
          <img src={props.movie.Poster} alt="movieposter" className="" />
        </div>
        <div className="col-span-2 px-10 py-10 text-slate-200 flex flex-col justify-center">
          <h1 className="text-4xl text-cyan-300">{props.movie.Title}</h1>
          <h1 className="text-lg  pb-4">{props.movie.Plot}</h1>
          <h1 className="text-lg pb-4">Director: {props.movie.Director}</h1>
          <h1 className="text-lg pb-4">Genre: {props.movie.Genre}</h1>
          <h1 className="text-lg pb-4">Actors: {props.movie.Actors} </h1>
          <h1 className="text-lg pb-4">Release Date: {props.movie.Released}</h1>
          <h1 className="text-lg pb-4">
            Box Office Collection: {props.movie.BoxOffice}
          </h1>
          <h1 className="text-lg pb-4">Language:{props.movie.Language} </h1>
          <h1 className="flex items-center text-slate-900 font-bold text-lg">
            Rating: <span className="material-icons text-yellow-300">star</span>{" "}
            {props.movie.imdbRating} / 10
          </h1>
        </div>
      </div>
    </div>
  );
}
