import { Link } from "react-router-dom";

export default function Header()
{
  return (
    <header className="py-6 px-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
              <span className="gradient-text">SatSet</span>
              <span className="text-white">Topup</span>
          </h1>
          <Link to="/" key={'navigate-to-home'} className="text-gray-400 hover:text-purple-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
          </Link>
      </div>
    </header>
  );
}