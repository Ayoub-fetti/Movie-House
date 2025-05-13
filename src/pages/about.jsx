import React from "react";
import { Film, Star, Users, Award, Clapperboard } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header with animation */}
        <div className="text-center mb-16 transform transition duration-700 hover:scale-105">
            <h1 className="text-5xl font-bold mb-4 text-gray-900 relative inline-block z-0">
            <span className="relative z-10">À propos de MovieHouse</span>
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-pink-600 opacity-50 rounded-full z-0"></span>
            </h1>
          <p className="text-xl text-gray-600 italic">Votre passion pour le cinéma, notre priorité</p>
        </div>

        {/* Main content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero section */}
          <div className="bg-gray-900 text-white p-8 text-center relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            </div>
            <Clapperboard className="mx-auto mb-4 text-pink-600" size={48} />
            <h2 className="text-2xl font-bold mb-4">Bienvenue sur MovieHouse</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Une plateforme créée par des passionnés de cinéma.
            </p>
          </div>
          
          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <FeatureCard 
              icon={<Film />}
              title="Collection Exceptionnelle" 
              description="Explorez une vaste bibliothèque de films, des blockbusters récents aux classiques intemporels." 
            />
            <FeatureCard 
              icon={<Star />}
              title="Recommandations Personnalisées" 
              description="Découvrez des films adaptés à vos goûts grâce à notre système de recommandation intelligent." 
            />
            <FeatureCard 
              icon={<Users />}
              title="Communauté Vibrantee" 
              description="Rejoignez des discussions passionnantes et partagez vos opinions avec d'autres cinéphiles." 
            />
            <FeatureCard 
              icon={<Award />}
              title="Critiques Expertes" 
              description="Accédez à des analyses approfondies rédigées par des critiques professionnels et passionnés." 
            />
          </div>
          
          {/* Testimonial / Mission */}
          <div className="bg-gray-50 p-8 border-t border-gray-100">
            <blockquote className="text-lg italic text-gray-700 text-center max-w-2xl mx-auto">
              "Notre mission est d'offrir une expérience fluide, interactive et enrichissante pour tous les cinéphiles, 
              débutants comme confirmés. Découvrez les dernières sorties, explorez des classiques, et faites partie 
              d'une communauté active autour du septième art."
            </blockquote>
            
            <div className="text-center mt-8">
              <p className="text-lg font-medium text-gray-900">
                Merci de faire partie de l'aventure MovieHouse.
              </p>
              <p className="text-lg text-gray-700 mt-2">
                Installez-vous confortablement... et bon film ! 🎬
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-12 text-center">
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg">
            Explorer les films
          </button>
        </div>
      </div>
    </div>
  );
};

// Component for feature cards
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition duration-300 flex">
      <div className="mr-4 text-pink-600 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default About;
