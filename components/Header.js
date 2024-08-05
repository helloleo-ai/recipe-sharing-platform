import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Recipe Sharing Platform</h1>
        <nav>
          <Link href="/" legacyBehavior>
            <a className="mr-4">Home</a>
          </Link>
          <Link href="/register" legacyBehavior>
            <a className="mr-4">Register</a>
          </Link>
          <Link href="/login" legacyBehavior>
            <a>Login</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
