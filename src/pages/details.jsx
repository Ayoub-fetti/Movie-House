import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = '911a6476072a4392187ba7a5051e199a';

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=fr-FR&append_to_response=videos`);
        if (!res.ok) throw new Error("Erreur lors du chargement des détails.");
        const data = await res.json();
        setMovie(data);

        // Cherche la bande-annonce YouTube
        const yt = data.videos?.results?.find(
          v => v.site === "YouTube" && v.type === "Trailer"
        );
        setTrailer(yt ? yt.key : null);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    }
    fetchDetails();
  }, [id]);

  if (loading) return <div className="text-white p-8">Chargement...</div>;
  if (error) return <div className="text-red-400 p-8">{error}</div>;
  if (!movie) return null;

  return (
    <div className="p-8 text-white">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : "https://via.placeholder.com/300x450?text=No+Image"}
          alt={movie.title}
          className="w-80 h-72 rounded-lg shadow-lg mt-12"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
          <p className="mb-4 italic">{movie.tagline}</p>
          <p className="mb-4">{movie.overview}</p>
          <div className="mb-2">
            <span className="font-bold">Genres :</span>{" "}
            {movie.genres?.map(g => g.name).join(", ")}
          </div>
          <div className="mb-2">
            <span className="font-bold">Durée :</span> {movie.runtime} min
          </div>
          <div className="mb-2">
            <span className="font-bold">Sortie :</span> {movie.release_date}
          </div>
          <div className="mb-2">
            <span className="font-bold">Note :</span> ⭐ {movie.vote_average} / 10
          </div>
          {trailer && (
            <div className="mt-6">
              <span className="font-bold">Bande-annonce :</span>
              <div className="aspect-video mt-2">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${trailer}`}
                  title="YouTube trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64 md:h-80 rounded-lg"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;