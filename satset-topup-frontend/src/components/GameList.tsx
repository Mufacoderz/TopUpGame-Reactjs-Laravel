import { useNavigate } from "react-router-dom";

export default function GameList()
{

    // logical
    const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="gradient-text">Game Populer</span>
                </h2>
                <p className="text-xl text-gray-400">Top up game favoritmu dengan harga termurah</p>
            </div>
            
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                
                <div className="bg-gray-800 rounded-2xl p-6 card-hover cursor-pointer group">
                    <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-xl p-4 mb-4">
                        <img src="https://picsum.photos/seed/mobile-legends/150/150" alt="Mobile Legends" className="w-full h-32 object-contain rounded-lg"/>
                    </div>
                    <h3 className="text-sm md:text-md font-semibold mb-2 group-hover:text-purple-400 transition-colors">Mobile Legends</h3>
                    <button onClick={ () => { navigate('/checkout') } } className="text-sm md:text-md w-full bg-purple-600/20 hover:bg-purple-600 text-purple-400 hover:text-white py-2 rounded-lg transition-all duration-300">
                        Top Up Sekarang
                    </button>
                </div>

                
                <div className="bg-gray-800 rounded-2xl p-6 card-hover cursor-pointer group">
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-4 mb-4">
                        <img src="https://picsum.photos/seed/valorant/150/150" alt="Valorant" className="w-full h-32 object-contain rounded-lg"/>
                    </div>
                    <h3 className="text-sm md:text-md font-semibold mb-2 group-hover:text-purple-400 transition-colors">Valorant</h3>
                    <button onClick={ () => { navigate('/checkout') } } className="text-sm md:text-md w-full bg-purple-600/20 hover:bg-purple-600 text-purple-400 hover:text-white py-2 rounded-lg transition-all duration-300">
                        Top Up Sekarang
                    </button>
                </div>

                
                <div className="bg-gray-800 rounded-2xl p-6 card-hover cursor-pointer group">
                    <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-4 mb-4">
                        <img src="https://picsum.photos/seed/pubg-mobile/150/150" alt="PUBG Mobile" className="w-full h-32 object-contain rounded-lg"/>
                    </div>
                    <h3 className="text-sm md:text-md font-semibold mb-2 group-hover:text-purple-400 transition-colors">PUBG Mobile</h3>
                    <button onClick={ () => { navigate('/checkout') } } className="text-sm md:text-md w-full bg-purple-600/20 hover:bg-purple-600 text-purple-400 hover:text-white py-2 rounded-lg transition-all duration-300">
                        Top Up Sekarang
                    </button>
                </div>

                
                <div className="bg-gray-800 rounded-2xl p-6 card-hover cursor-pointer group">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-4 mb-4">
                        <img src="https://picsum.photos/seed/genshin-impact/150/150" alt="Genshin Impact" className="w-full h-32 object-contain rounded-lg"/>
                    </div>
                    <h3 className="text-sm md:text-md font-semibold mb-2 group-hover:text-purple-400 transition-colors">Genshin Impact</h3>
                    <button onClick={ () => { navigate('/checkout') } } className="text-sm md:text-md w-full bg-purple-600/20 hover:bg-purple-600 text-purple-400 hover:text-white py-2 rounded-lg transition-all duration-300">
                        Top Up Sekarang
                    </button>
                </div>

                
                <div className="bg-gray-800 rounded-2xl p-6 card-hover cursor-pointer group">
                    <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl p-4 mb-4">
                        <img src="https://picsum.photos/seed/free-fire/150/150" alt="Free Fire" className="w-full h-32 object-contain rounded-lg"/>
                    </div>
                    <h3 className="text-sm md:text-md font-semibold mb-2 group-hover:text-purple-400 transition-colors">Free Fire</h3>
                    <button onClick={ () => { navigate('/checkout') } } className="text-sm md:text-md w-full bg-purple-600/20 hover:bg-purple-600 text-purple-400 hover:text-white py-2 rounded-lg transition-all duration-300">
                        Top Up Sekarang
                    </button>
                </div>

                
                <div className="bg-gray-800 rounded-2xl p-6 card-hover cursor-pointer group">
                    <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl p-4 mb-4">
                        <img src="https://picsum.photos/seed/roblox/150/150" alt="Roblox" className="w-full h-32 object-contain rounded-lg"/>
                    </div>
                    <h3 className="text-sm md:text-md font-semibold mb-2 group-hover:text-purple-400 transition-colors">Roblox</h3>
                    <button onClick={ () => { navigate('/checkout') } } className="text-sm md:text-md w-full bg-purple-600/20 hover:bg-purple-600 text-purple-400 hover:text-white py-2 rounded-lg transition-all duration-300">
                        Top Up Sekarang
                    </button>
                </div>

                
                <div className="bg-gray-800 rounded-2xl p-6 card-hover cursor-pointer group">
                    <div className="bg-gradient-to-br from-red-600 to-pink-600 rounded-xl p-4 mb-4">
                        <img src="https://picsum.photos/seed/cod-mobile/150/150" alt="Call of Duty Mobile" className="w-full h-32 object-contain rounded-lg"/>
                    </div>
                    <h3 className="text-sm md:text-md font-semibold mb-2 group-hover:text-purple-400 transition-colors">COD Mobile</h3>
                    <button onClick={ () => { navigate('/checkout') } } className="text-sm md:text-md w-full bg-purple-600/20 hover:bg-purple-600 text-purple-400 hover:text-white py-2 rounded-lg transition-all duration-300">
                        Top Up Sekarang
                    </button>
                </div>

                
                <div className="bg-gray-800 rounded-2xl p-6 card-hover cursor-pointer group">
                    <div className="bg-gradient-to-br from-teal-600 to-green-600 rounded-xl p-4 mb-4">
                        <img src="https://picsum.photos/seed/apex-legends/150/150" alt="Apex Legends" className="w-full h-32 object-contain rounded-lg"/>
                    </div>
                    <h3 className="text-sm md:text-md font-semibold mb-2 group-hover:text-purple-400 transition-colors">Apex Legends</h3>
                    <button onClick={ () => { navigate('/checkout') } } className="text-sm md:text-md w-full bg-purple-600/20 hover:bg-purple-600 text-purple-400 hover:text-white py-2 rounded-lg transition-all duration-300">
                        Top Up Sekarang
                    </button>
                </div>
            </div>

            
            {/* <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                    Lihat Semua Game
                </button>
            </div> */}
        </div>
    </section>
  );
}