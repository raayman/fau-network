import { Link, Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          {/* WARNING: EVERY THING BELLOW SHOULD BE EDITED IF WORKING ON THE NAVBAR COMPONENT */}
          {/* NOTE: The link components will be used to route to other pages in the app, best to use in the navbar */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Campus Events</h1>
            <nav className="flex items-center gap-6">
              <Link
                to="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                to="/events"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                Events
              </Link>
              <Link
                to="/login"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                Sign Up
              </Link>
              <Link
                to="/profile"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                Profile
              </Link>
            </nav>
          </div>
          {/* WARNING: EVERY THING BELLOW SHOULD BE EDITED IF WORKING ON THE NAVBAR COMPONENT */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex justify-center">
          {/* WARNING: THIS PART IS FOR THE DIFFERENT PAGE COMPONENTS TO RENDER OUT */}
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      {/* WARNING: THIS PART IS TO EDIT FOR THE FOOTER COMPONENT */}
      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            &copy; 2025 Campus Event Planner
          </p>
        </div>
      </footer>
      {/* WARNING: EDIT IN BETWEEN FOR THE FOOTER */}
    </div>
  );
}
