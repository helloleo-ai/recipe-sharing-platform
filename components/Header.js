import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white text-gray-800 p-4 rounded-full shadow-md m-2 max-w-4xl mx-auto flex items-center">
      <div className="container mx-auto flex justify-between items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img src="/path/to/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
                <span className="font-bold text-lg">User Name</span>
              </div>
<nav className="flex space-x-4">
          <Link href="/" legacyBehavior>
            <a className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-orange-600 transition">
              <span>🏠</span>
              <span>Home</span>
            </a>
          </Link>
          <Link href="/register" legacyBehavior>
            <a className="flex items-center space-x-2 bg-yellow-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-yellow-600 transition">
              <span>📝</span>
              <span>Register</span>
            </a>
          </Link>
          <Link href="/login" legacyBehavior>
            <a className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition">
              <span>🔑</span>
              <span>Login</span>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
