import Button from "./Button";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-6 shadow shadow-gray-200">
      <div className="container mx-auto flex items-center justify-around">
        <h3 className="logo font-heading">Hamid</h3>
        <ul className="space-x-3 hidden md:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/services">Services</NavLink>
        </ul>

        <Button
          type="button"
          className="bg-primary px-4 py-2 text-white rounded-lg hidden md:block"
        >
          Contact
        </Button>
        <div className="hamburger space-y-2 md:hidden">
          <div className="line bg-black w-10 h-1"></div>
          <div className="line bg-black w-10 h-1"></div>
          <div className="line bg-black w-10 h-1"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
