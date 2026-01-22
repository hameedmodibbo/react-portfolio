import { Link } from "react-router-dom";
const NotFoundPage = function () {
  return (
    <section className="px-3 py-6 mx-auto text-center space-y-6">
      <h1 className="text-4xl">Page Not Found !!!</h1>
      <p className="text-highlight">
        The page you requested for does not exist
      </p>
      <Link to="/" className="py-2 px-4 bg-gray-600">
        Go back
      </Link>
    </section>
  );
};

export default NotFoundPage;
