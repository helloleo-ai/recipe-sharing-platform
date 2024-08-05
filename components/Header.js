import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white text-gray-800 p-1 rounded-full shadow-md m-2 max-w-4xl mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold absolute top-0 right-0 m-4">🍴 Recipe Sharing Platform</h1>
<nav className="flex space-x-4">
          <Link href="/" legacyBehavior>
            <a className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
              <span>🏠</span>
              <span>Home</span>
            </a>
          </Link>
          <Link href="/register" legacyBehavior>
            <a className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
              <span>📝</span>
              <span>Register</span>
            </a>
          </Link>
          <Link href="/login" legacyBehavior>
            <a className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
              <span>🔑</span>
              <span>Login</span>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
