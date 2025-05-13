import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_KEY = '911a6476072a4392187ba7a5051e199a';

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate  =  useNavigate();

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=fr-FR&append_to_response=videos`);
        if (!res.ok) throw new Error("Erreur lors du chargement des détails.");
        const data = await res.json();
        setMovie(data);

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
    <div className="relative bg-black text-white min-h-screen">
    <div className="absolute inset-0">
    <img
      src={movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : "https://via.placeholder.com/1280x720?text=No+Image"}
      alt={movie.title}
      className="w-full h-full object-cover opacity-30"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
    </div>

    <div className="relative z-10 p-8 max-w-7xl mx-auto">
    <button
      className="mb-6 px-4 py-2 bg-gradient-to-r from-[#662D8C] to-[#ED1E79] rounded text-white font-semibold shadow-md hover:scale-105 transition"
      onClick={() => navigate(-1)}
    >
      <i className="fas fa-undo-alt mr-2" /> Retour
    </button>
    <button className="mt-4 px-4 py-2 ml-4 bg-pink-600 rounded text-white font-semibold shadow hover:bg-pink-700 transition"
            onClick={() => {
            const favoris = JSON.parse(localStorage.getItem('favoris') || '[]');
            if (!favoris.find(f => f.id === movie.id)) {
            favoris.push({
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path,
                release_date: movie.release_date,
                vote_average: movie.vote_average,
            });
            localStorage.setItem('favoris', JSON.stringify(favoris));
            alert('Ajouté aux favoris !');
            } else {
                alert('Déjà dans les favoris.');
            }
        }}>
        <i className="fas fa-heart mr-2" /> Ajouter aux favoris
    </button>

    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/300x450?text=No+Image"}
        alt={movie.title}
        className="w-72 md:w-80 rounded-xl shadow-2xl"
      />

      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-2">{movie.title}</h2>
        <p className="text-pink-300 italic mb-4">{movie.tagline}</p>
        <p className="mb-6 leading-relaxed text-gray-200">{movie.overview}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 text-sm text-gray-300">
          <div><span className="font-bold text-white">Genres:</span> {movie.genres?.map(g => g.name).join(", ")}</div>
          <div><span className="font-bold text-white">Durée:</span> {movie.runtime} min</div>
          <div><span className="font-bold text-white">Sortie:</span> {movie.release_date}</div>
          <div><span className="font-bold text-white">Note:</span> ⭐ {movie.vote_average} / 10</div>
        </div>

        {trailer && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Bande-annonce</h3>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${trailer}`}
                title="YouTube trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
    </div>

  );
}

export default Details;