import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container mx-auto text-center p-4">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-lg">Page Not Found</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go Back to Home
      </Link>
    </div>
  );
}
