import React , {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function Favoris (){
    const [favoris, setFavoris] = useState([]);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem('favoris') || '[]');
        setFavoris(favs);
    }, []);

    return (
    <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-white">Mes Favoris</h2>
            {favoris.length === 0 ? (
                <div className="text-white">Aucun film en favorie.</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {favoris.map(movie => (
                    <Link
                    to={`/details/${movie.id}`}
                    key={movie.id}
                    className="bg-gradient-to-r from-[#662D8C] to-[#ED1E79] text-white rounded-lg overflow-hidden shadow-lg hover:shadow-[#662D8C] transition-transform hover:scale-105"
                    >
                    <img
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
export default Favoris