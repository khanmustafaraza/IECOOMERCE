export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white text-gray-700 py-6 px-6 flex flex-col md:flex-row justify-between items-center">
      {/* Left: Copyright */}
      <p className="text-sm">&copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.</p>

      {/* Right: Links */}
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#" className="text-gray-600 hover:text-gray-500 transition-colors duration-200">
          Privacy Policy
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-500 transition-colors duration-200">
          Terms of Service
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-500 transition-colors duration-200">
          Contact
        </a>
      </div>
    </footer>
  );
}