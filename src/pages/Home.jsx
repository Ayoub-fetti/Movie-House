import React, { useState } from "react";

const movies = [
  { id: 1, title: 'Inception', poster: 'https://image.tmdb.org/t/p/w300/8s4h9friP6Ci3adRGahHARVd76E.jpg' },
  { id: 2, title: 'Interstellar', poster: 'https://image.tmdb.org/t/p/w300/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg' },
  { id: 3, title: 'The Dark Knight', poster: 'https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
  { id: 4, title: 'Avatar', poster: 'https://image.tmdb.org/t/p/w300/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg' },
]

function Home(){

    const [search, setSearch] = useState("");
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="p-8">
            <input type="text"
                   placeholder="search" 
                   value={search} 
                   onChange={e => setSearch(e.target.value)}
                   className="mb-6 px-4 py-2 w-full max-w-md rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <h2 className="text-2xl font-bold mb-6">Films populaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredMovies.map(movie => (
                <div key={movie.id} className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-black">
                    <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">{movie.title}</h3>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
export default Home