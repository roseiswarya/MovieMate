import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/MugilWorks.css"; // We'll define styles here

const movieIds = [
  536591, // Pon Manickavel
  262578, // Kandaen
  59872,  //Pokkiri
  63810,  // Engeyum Kadhal
  24383,  // Villu
  308165, // Action Jackson
  679844, // Radhe
  102632, // Rowdy Rathore
  78466,   // Ullam Kollai Poguthey
  872852 //gopala gopala
];

function MugilWorks() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetched = await Promise.all(
          movieIds.map(async (id) => {
            const res = await fetch(
              `https://api.themoviedb.org/3/movie/${id}?api_key=8e4948a2354bd757aa0097a1d8207498&language=en-US`
            );
            return await res.json();
          })
        );
        setMovies(fetched);
      } catch (err) {
        console.error("Error fetching movies", err);
      }
    };

    fetchMovies();
  }, []);

  const galleryImages = [
  "mugil1.jpg",
  "mugil2.jpg",
  "mugil3.jpg",
  "mugil0.jpg",
  "mugil13.jpg",
  "mugil4.jpg",
  "mugil5.jpg",
  "mugil6.jpg",
  "mugil7.jpg",
  "mugil8.jpg",
  "mugil9.jpg",
  "mugil10.jpg",
  "mugil11.jpg",
  "mugil12.jpg",
];

// Function to open modal with clicked image
  const handleImageClick = (img) => {
    setSelectedImage(img); // Store the clicked image
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedImage(null); // Reset the selected image
  };


  return (
    <div className="mugil-works-container">
      <div className="mugil-header">
        <img 
        src="/ac-mugil.jpg" 
        alt="A.C. Mugil" 
        className="mugil-image" />

        <div className="mugil-about">
          <h2>A.C. Mugil</h2>
          <p>
            A.C. Mugil is a celebrated Indian Director and Writer known for his contributions in Tamil and Hindi cinema.
            He has worked on story, screenplay, and dialogues for a number of popular films including
            "Pon Manickavel", "Rowdy Rathore", and "Villu". His impactful storytelling and compelling scripts
            have made him a respected name in the film industry.He has worked on numerous successful films, leaving a significant impact on the Indian film industry.
            His work has set a benchmark in terms of storytelling, and his films continue to be enjoyed by audiences across generations.


          </p>
        </div>
      </div>
      <div className="gallery-section">
        <h2 className="section-title">Photographs</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item">
              <img
              src={`/${img}`}
              alt={`Mugil ${index}`}
              className="gallery-image"
              />
            </div>
          ))}
          </div>
        </div>


      <h3 className="section-title"> Works</h3>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MugilWorks;
