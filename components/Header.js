import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white text-gray-800 p-4 rounded-full shadow-md flex items-center">
      <div className="flex justify-end items-center space-x-4">
<nav className="flex space-x-4">
          <Link href="/" legacyBehavior>
            <a className="flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <span className="text-xl">🏠</span>
              <span className="font-semibold">Home</span>
            </a>
          </Link>
          <Link href="/register" legacyBehavior>
            <a className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full shadow-md hover:from-yellow-500 hover:to-yellow-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <span className="text-xl">📝</span>
              <span className="font-semibold">Register</span>
            </a>
          </Link>
          <Link href="/login" legacyBehavior>
            <a className="flex items-center space-x-2 bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full shadow-md hover:from-green-500 hover:to-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <span className="text-xl">🔑</span>
              <span className="font-semibold">Login</span>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
