// src/components/Navbar.js

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li><a href="/" className="text-white">Home</a></li>
        <li><a href="/login" className="text-white">Login</a></li>
        <li><a href="/register" className="text-white">Register</a></li>
        <li><a href="/dashboard" className="text-white">Dashboard</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
