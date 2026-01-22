import HomeHero from "../components/HomeHero.jsx";
import HomeAbout from "../components/HomeAbout.jsx";
import HomeProjects from "../components/HomeProjects.jsx";
import HomeServices from "../components/HomeServices.jsx";
 
const HomePage = () => {
  return (
    <main className="grow flex flex-col items-center w-full">
      <HomeHero />
      <HomeAbout />
      <HomeProjects />
      <HomeServices />
    </main>
  );
};
export default HomePage;
