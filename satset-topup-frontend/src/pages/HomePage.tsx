import Footer from "../components/Footer";
import GameList from "../components/GameList";
import HeroSection from "../components/HeroSection";

export default function HomePage()
{
  return (
    <>
      <main className="bg-gray-950 text-white">
        <HeroSection /> 
        <GameList/>
      </main>
      <Footer/>
    </>
  );
}