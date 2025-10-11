import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header>
        <h1>Campus Events</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/events">Events</Link> | <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/profile">Profile</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025 Campus Event Planner</p>
      </footer>
    </div>
  );
}
