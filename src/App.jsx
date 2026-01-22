import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import NotFoundPage from "./components/NotFoundPage"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import ProjectsPage from "./pages/ProjectsPage"

//Layouts
import MainLayout from "./layouts/MainLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<NotFoundPage />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Route>,
  ),
);

const App = function () {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
