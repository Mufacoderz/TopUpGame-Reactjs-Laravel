import Footer from "../components/Footer";
import Header from "../components/Header";

export default function TransactionCheckPage() {
  return (
    <div className="bg-gray-950 text-white">
      <Header />

      <section className="relative py-20 px-4 overflow-hidden min-h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-gray-950"></div>

        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Cek Transaksi</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Lacak status transaksi Anda dengan mudah
            <br />
            Masukkan nomor transaksi atau nomor WhatsApp Anda
          </p>
          <div className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Contoh: INV-xxxx"
                className="text-center w-full bg-gray-700 border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div className="text-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-12 rounded-full transition-all duration-300 transform hover:scale-105 glow">
                Cari Transaksi
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
