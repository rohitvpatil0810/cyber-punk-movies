import React from "react";
import Card from "../components/Card";
export default function Movies() {
  const Movies = [
    {
      Title: "Guardians of the Galaxy Vol. 2",
      Year: "2017",
      Rated: "PG-13",
      Released: "05 May 2017",
      Runtime: "136 min",
      Genre: "Action, Adventure, Comedy",
      Director: "James Gunn",
      Writer: "James Gunn, Dan Abnett, Andy Lanning",
      Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
      Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
      Language: "English",
      Country: "United States",
      Awards: "Nominated for 1 Oscar. 15 wins & 59 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "7.6/10",
        },
        {
          Source: "Rotten Tomatoes",
          Value: "85%",
        },
        {
          Source: "Metacritic",
          Value: "67/100",
        },
      ],
      Metascore: "67",
      imdbRating: "7.6",
      imdbVotes: "641,226",
      imdbID: "tt3896198",
      Type: "movie",
      DVD: "22 Aug 2017",
      BoxOffice: "$389,813,101",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
    {
      Title: "Tenet",
      Year: "2020",
      Rated: "PG-13",
      Released: "03 Sep 2020",
      Runtime: "150 min",
      Genre: "Action, Sci-Fi, Thriller",
      Director: "Christopher Nolan",
      Writer: "Christopher Nolan",
      Actors: "John David Washington, Robert Pattinson, Elizabeth Debicki",
      Plot: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      Language: "English, Russian, Ukrainian, Estonian, Norwegian, Hindi",
      Country: "United States, United Kingdom",
      Awards: "Won 1 Oscar. 48 wins & 136 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "7.4/10",
        },
        {
          Source: "Rotten Tomatoes",
          Value: "69%",
        },
        {
          Source: "Metacritic",
          Value: "69/100",
        },
      ],
      Metascore: "69",
      imdbRating: "7.4",
      imdbVotes: "459,505",
      imdbID: "tt6723592",
      Type: "movie",
      DVD: "15 Dec 2020",
      BoxOffice: "$58,504,105",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
    {
      Title: "Iron Man",
      Year: "2008",
      Rated: "PG-13",
      Released: "02 May 2008",
      Runtime: "126 min",
      Genre: "Action, Adventure, Sci-Fi",
      Director: "Jon Favreau",
      Writer: "Mark Fergus, Hawk Ostby, Art Marcum",
      Actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
      Plot: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      Language: "English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian",
      Country: "United States, Canada",
      Awards: "Nominated for 2 Oscars. 21 wins & 73 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "7.9/10",
        },
        {
          Source: "Rotten Tomatoes",
          Value: "94%",
        },
        {
          Source: "Metacritic",
          Value: "79/100",
        },
      ],
      Metascore: "79",
      imdbRating: "7.9",
      imdbVotes: "1,019,096",
      imdbID: "tt0371746",
      Type: "movie",
      DVD: "30 Sep 2008",
      BoxOffice: "$319,034,126",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },

    {
      Title: "Men in Black",
      Year: "1997",
      Rated: "PG-13",
      Released: "02 Jul 1997",
      Runtime: "98 min",
      Genre: "Action, Adventure, Comedy",
      Director: "Barry Sonnenfeld",
      Writer: "Lowell Cunningham, Ed Solomon",
      Actors: "Tommy Lee Jones, Will Smith, Linda Fiorentino",
      Plot: "A police officer joins a secret organization that polices and monitors extraterrestrial interactions on Earth.",
      Language: "English, Spanish",
      Country: "United States",
      Awards: "Won 1 Oscar. 22 wins & 39 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTlhYTVkMDktYzIyNC00NzlkLTlmN2ItOGEyMWQ4OTA2NDdmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "7.3/10",
        },
        {
          Source: "Rotten Tomatoes",
          Value: "92%",
        },
        {
          Source: "Metacritic",
          Value: "71/100",
        },
      ],
      Metascore: "71",
      imdbRating: "7.3",
      imdbVotes: "550,853",
      imdbID: "tt0119654",
      Type: "movie",
      DVD: "13 May 2003",
      BoxOffice: "$250,690,539",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
  ];

  return (
    <div>
      {Movies.map((movie) => {
        return <Card movie={movie} key={movie.imdbID}></Card>;
      })}

      <div className="flex justify-center items-center py-4 font-bold text-slate-300">
        <h1>Many more are Coming Soon...</h1>
      </div>
    </div>
  );
}
