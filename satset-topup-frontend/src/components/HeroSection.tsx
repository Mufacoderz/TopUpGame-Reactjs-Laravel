export default function HeroSection()
{
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-gray-950"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="gradient-text">SatSet</span>
                <span className="text-white">Topup</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Top Up Game Termurah & Terpercaya di Indonesia<br/>
                Proses Cepat, Aman, dan 24 Jam Nonstop!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 glow">
                    Mulai Top Up Sekarang
                </button>
                <button className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600/20 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
                    Lihat Semua Game
                </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
                <div className="text-center">
                    <div className="text-4xl font-bold gradient-text">500K+</div>
                    <div className="text-gray-400 mt-2">Transaksi Sukses</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold gradient-text">100+</div>
                    <div className="text-gray-400 mt-2">Game Tersedia</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold gradient-text">24/7</div>
                    <div className="text-gray-400 mt-2">Layanan Online</div>
                </div>
            </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    </section>
  );
}