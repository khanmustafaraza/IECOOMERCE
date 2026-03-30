import Link from "next/link";

export default function Navbar() {
  const user = {
    name: "good",
  };

  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 border-b border-gray-200 bg-white shadow-sm">
      {/* Left - Logo and Main Links */}
      <div className="flex items-center space-x-6">
        <Link href="/" className="font-semibold text-lg text-gray-800 hover:text-gray-600">
          E-Commerce
        </Link>
        <Link href="/shop" className="text-gray-700 hover:text-gray-500 transition-colors duration-200">
          Shop
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-gray-500 transition-colors duration-200">
          About
        </Link>
      </div>

      {/* Right - User Links */}
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-gray-500 transition-colors duration-200"
            >
              Dashboard
            </Link>
            {/* Future logout button can go here */}
          </>
        ) : (
          <>
            <Link
              href="/auth/login"
              className="text-gray-700 hover:text-gray-500 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="text-gray-700 hover:text-gray-500 transition-colors duration-200"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}