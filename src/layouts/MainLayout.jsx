import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";


const MainLayout = function(){
return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
)
}
export default MainLayout;