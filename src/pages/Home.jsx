import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_KEY = '911a6476072a4392187ba7a5051e199a'; 

function Home() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        let url = "";
       if (search.trim() === "") {
            url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`;
        } else {
            url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr-FR&query=${encodeURIComponent(search)}&page=1&include_adult=false`;
        }



        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error("Erreur lors du chargement des films.");
                return res.json();
            })

            .then(data => {
                setMovies(data.results || []);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [search]);

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-8">
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="recherche..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="mb-6 px-4 py-2 w-full max-w-md text-white rounded-4xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#662D8C]"
                />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-white">Films populaires</h2>
            {loading ? (
                <div className="text-white">Chargement...</div>
            ) : error ? (
                <div className="text-red-400 font-bold">{error}</div>
            ) : filteredMovies.length === 0 ? (
                <div className="text-white">Aucun résultat</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredMovies.map(movie => (
                        <Link
                            to={`/details/${movie.id}`}
                            key={movie.id}
                            className="bg-gradient-to-r from-[#662D8C] to-[#ED1E79] text-white rounded-lg overflow-hidden shadow-lg shadow-[#d76b9a] hover:shadow-[#662D8C] transition-transform hover:scale-105"
                        >                            <img
                                src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : "https://via.placeholder.com/300x450?text=No+Image"}
                                alt={movie.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{movie.title}</h3>
                                <p className="mt-2">⭐ {movie.vote_average} / 10</p>
                                <p className="text-sm font-bold text-gray-200 ml-6">{movie.release_date}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home