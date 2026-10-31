import FavouritesList from "../components/FavouritesList";

const favouriteVideoGames = [
  "Super Mario Sunshine",
  "Sonic Adventure 1 & 2",
  "The Legend of Zelda: Ocarina of Time & Majora's Mask",
  "Hollow Knight Silksong",
  "Mario Kart Wii"
];

const favouriteBooks = [
  "The Book Of Mormon",
  "Swallows and Amazons",
  "The Hobbit",
  "Jurassic Park",
  "The Grashopper Trap",
  "The Count of Monte Cristo",
];

const favouriteMovies = [
  "Ratatouille",
  "Jurassic Park",
  "The Emporer's New Groove",
  "The Incredibles",
  "Star Wars: A New Hope",
  "Madagascar",
  "Wallace and Gromit: The Curse of the Were-Rabbit"
];

const favouriteShows =[
  "Phineas And Ferb",
  "Avatar: The Last Airbender",
  "Homestar Runner - This is the only place it fits",
  "Fraiser",
  "Seinfeld",
  "Garfield and Friends"
]

export default function About() {
  return (
    <main className="mx-auto px-30 py-12 bg-blue-200 w-full min-h-screen m-0">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 my-4">
        I am a full-stack and devloper and amature game devleoper. I like to play both board and video games, draw, and harass small dogs
        I am a proud member of the Church of Jesus Christ of Latter-Day Saints and native of Montana currently living in Missouri.
      </p>
      <article className="bg-sky-800 p-4 my-10 rounded-lg shadow-md mx-auto" >
        <h3 className="text-2xl font-bold mb-2 text-white">My Favourites:</h3>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <FavouritesList favouriteObjectType="Video Games" favourites={favouriteVideoGames} />
          <FavouritesList favouriteObjectType="Books" favourites={favouriteBooks} />
          <FavouritesList favouriteObjectType="Movies" favourites={favouriteMovies} />
          <FavouritesList favouriteObjectType="Shows" favourites={favouriteShows} />
        </div>
        

      </article>
      
    </main>
  );
}