import Footer from "../components/Footer";
import Header from "../components/Header";

function CheckoutPage()
{
  return (
    <div className="bg-gray-950 text-white">
      
      <Header/>

      <main className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
              
              <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4">
                      <span className="gradient-text">Checkout</span>
                  </h2>
                  <p className="text-xl text-gray-400">Pilih produk dan metode pembayaran</p>
              </div>

              
              <div className="bg-gray-900 rounded-2xl p-6 mb-8 flex items-center">
                  <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-xl p-3 mr-4">
                      <img src="https://picsum.photos/seed/mobile-legends/80/80" alt="Mobile Legends" className="w-16 h-16 object-contain rounded-lg"/>
                  </div>
                  <div>
                      <h3 className="text-xl font-semibold">Mobile Legends</h3>
                      <p className="text-gray-400">Top Up Diamond MLBB</p>
                  </div>
              </div>

              <section className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">Informasi Pengguna</h3>
                  <div className="bg-gray-800 rounded-xl p-6">
                        <div>
                            <label className="block text-gray-400 mb-2">User ID / Game ID</label>
                            <input type="text" placeholder="Masukkan User ID" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                        </div>
                  </div>
              </section>
              
              <section className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">Pilih Jumlah Diamond</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      <div className="card-hover">
                          <input type="radio" id="product-1" name="product" className="hidden" />
                          <label htmlFor="product-1" className="block bg-gray-800 rounded-xl p-5 cursor-pointer border-2 border-gray-700 transition-all">
                              <div className="flex justify-between items-center">
                                  <div>
                                      <h4 className="font-semibold text-lg">86 Diamond</h4>
                                      <p className="text-gray-400 text-sm">Bonus 8 Diamond</p>
                                  </div>
                                  <div className="text-right">
                                      <p className="text-xl font-bold">Rp 20.000</p>
                                      <p className="text-gray-400 text-sm line-through">Rp 25.000</p>
                                  </div>
                              </div>
                          </label>
                      </div>
                      
                      <div className="card-hover">
                          <input type="radio" id="product-2" name="product" className="hidden" checked />
                          <label htmlFor="product-2" className="block bg-gray-800 rounded-xl p-5 cursor-pointer border-2 border-gray-700 transition-all">
                              <div className="flex justify-between items-center">
                                  <div>
                                      <h4 className="font-semibold text-lg">172 Diamond</h4>
                                      <p className="text-gray-400 text-sm">Bonus 17 Diamond</p>
                                  </div>
                                  <div className="text-right">
                                      <p className="text-xl font-bold">Rp 40.000</p>
                                      <p className="text-gray-400 text-sm line-through">Rp 50.000</p>
                                  </div>
                              </div>
                          </label>
                      </div>

                      
                      <div className="card-hover">
                          <input type="radio" id="product-3" name="product" className="hidden" />
                          <label htmlFor="product-3" className="block bg-gray-800 rounded-xl p-5 cursor-pointer border-2 border-gray-700 transition-all">
                              <div className="flex justify-between items-center">
                                  <div>
                                      <h4 className="font-semibold text-lg">257 Diamond</h4>
                                      <p className="text-gray-400 text-sm">Bonus 25 Diamond</p>
                                  </div>
                                  <div className="text-right">
                                      <p className="text-xl font-bold">Rp 60.000</p>
                                      <p className="text-gray-400 text-sm line-through">Rp 75.000</p>
                                  </div>
                              </div>
                          </label>
                      </div>

                      
                      <div className="card-hover">
                          <input type="radio" id="product-4" name="product" className="hidden" />
                          <label htmlFor="product-4" className="block bg-gray-800 rounded-xl p-5 cursor-pointer border-2 border-gray-700 transition-all">
                              <div className="flex justify-between items-center">
                                  <div>
                                      <h4 className="font-semibold text-lg">344 Diamond</h4>
                                      <p className="text-gray-400 text-sm">Bonus 34 Diamond</p>
                                  </div>
                                  <div className="text-right">
                                      <p className="text-xl font-bold">Rp 80.000</p>
                                      <p className="text-gray-400 text-sm line-through">Rp 100.000</p>
                                  </div>
                              </div>
                          </label>
                      </div>

                      
                      <div className="card-hover">
                          <input type="radio" id="product-5" name="product" className="hidden" />
                          <label htmlFor="product-5" className="block bg-gray-800 rounded-xl p-5 cursor-pointer border-2 border-gray-700 transition-all">
                              <div className="flex justify-between items-center">
                                  <div>
                                      <h4 className="font-semibold text-lg">516 Diamond</h4>
                                      <p className="text-gray-400 text-sm">Bonus 51 Diamond</p>
                                  </div>
                                  <div className="text-right">
                                      <p className="text-xl font-bold">Rp 120.000</p>
                                      <p className="text-gray-400 text-sm line-through">Rp 150.000</p>
                                  </div>
                              </div>
                          </label>
                      </div>

                      
                      <div className="card-hover">
                          <input type="radio" id="product-6" name="product" className="hidden" />
                          <label htmlFor="product-6" className="block bg-gray-800 rounded-xl p-5 cursor-pointer border-2 border-gray-700 transition-all">
                              <div className="flex justify-between items-center">
                                  <div>
                                      <h4 className="font-semibold text-lg">706 Diamond</h4>
                                      <p className="text-gray-400 text-sm">Bonus 70 Diamond</p>
                                  </div>
                                  <div className="text-right">
                                      <p className="text-xl font-bold">Rp 160.000</p>
                                      <p className="text-gray-400 text-sm line-through">Rp 200.000</p>
                                  </div>
                              </div>
                          </label>
                      </div>
                  </div>
              </section>

              
              <section className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">Pilih Metode Pembayaran</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      <div className="card-hover">
                          <input type="radio" id="payment-1" name="payment" className="hidden" checked />
                          <label htmlFor="payment-1" className="block bg-gray-800 rounded-xl p-5 cursor-pointer border-2 border-gray-700 transition-all">
                              <div className="flex items-center">
                                  <div className="bg-blue-600 rounded-lg p-2 mr-4">
                                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                                      </svg>
                                  </div>
                                  <div>
                                      <h4 className="font-semibold">Transfer Bank</h4>
                                      <p className="text-gray-400 text-sm">BCA, Mandiri, BNI, BRI</p>
                                  </div>
                              </div>
                          </label>
                      </div>

                      
                      <div className="card-hover">
                          <input type="radio" id="payment-2" name="payment" className="hidden"/>
                          <label htmlFor="payment-2" className="block bg-gray-800 rounded-xl p-5 cursor-pointer border-2 border-gray-700 transition-all">
                              <div className="flex items-center">
                                  <div className="bg-blue-500 rounded-lg p-2 mr-4">
                                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                      </svg>
                                  </div>
                                  <div>
                                      <h4 className="font-semibold">E-Wallet</h4>
                                      <p className="text-gray-400 text-sm">GoPay, OVO, DANA, ShopeePay</p>
                                  </div>
                              </div>
                          </label>
                      </div>

                      
                      <div className="card-hover">
                          <input type="radio" id="payment-3" name="payment" className="hidden"/>
                          <label htmlFor="payment-3" className="block bg-gray-800 rounded-xl p-5 cursor-pointer border-2 border-gray-700 transition-all">
                              <div className="flex items-center">
                                  <div className="bg-purple-600 rounded-lg p-2 mr-4">
                                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                                      </svg>
                                  </div>
                                  <div>
                                      <h4 className="font-semibold">Kartu Kredit/Debit</h4>
                                      <p className="text-gray-400 text-sm">Visa, Mastercard, JCB</p>
                                  </div>
                              </div>
                          </label>
                      </div>

                      
                      <div className="card-hover">
                          <input type="radio" id="payment-4" name="payment" className="hidden"/>
                          <label htmlFor="payment-4" className="block bg-gray-800 rounded-xl p-5 cursor-pointer border-2 border-gray-700 transition-all">
                              <div className="flex items-center">
                                  <div className="bg-green-600 rounded-lg p-2 mr-4">
                                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                      </svg>
                                  </div>
                                  <div>
                                      <h4 className="font-semibold">Gerai Retail</h4>
                                      <p className="text-gray-400 text-sm">Indomaret, Alfamart</p>
                                  </div>
                              </div>
                          </label>
                      </div>
                  </div>
              </section>
              
              <section className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">Ringkasan Pesanan</h3>
                  <div className="bg-gray-800 rounded-xl p-6">
                      <div className="space-y-4">
                          <div className="flex justify-between">
                              <span className="text-gray-400">Produk</span>
                              <span>172 Diamond</span>
                          </div>
                          <div className="flex justify-between">
                              <span className="text-gray-400">Harga</span>
                              <span>Rp 50.000</span>
                          </div>
                          <div className="flex justify-between">
                              <span className="text-gray-400">Diskon</span>
                              <span className="text-green-400">- Rp 10.000</span>
                          </div>
                          <div className="flex justify-between pt-4 border-t border-gray-700">
                              <span className="font-semibold">Total</span>
                              <span className="text-xl font-bold">Rp 40.000</span>
                          </div>
                      </div>
                  </div>
              </section>

              
              <div className="text-center">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 glow">
                      Checkout Sekarang
                  </button>
              </div>
          </div>
      </main>

      <Footer/>    

    </div>
  );
}

export default CheckoutPage