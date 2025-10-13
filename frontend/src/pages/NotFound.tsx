import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="text-center">
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
        Go back to Home
      </Link>
    </div>
  );
}