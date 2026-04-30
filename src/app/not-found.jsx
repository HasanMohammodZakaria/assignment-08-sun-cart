import Link from "next/link";
import { BiError } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4
      bg-linear-to-br from-[#005691] to-[#FDB813]"
    >
      <div className="w-full max-w-7xl mx-auto text-center text-white">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-md p-5 rounded-full shadow-xl">
            <BiError size={60} className="text-red-600" />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-wide">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3">
          Page Not Found
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 max-w-md mx-auto">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-[#005691]
            px-6 py-3 rounded-lg font-medium shadow-lg
            hover:bg-gray-100 transition duration-300"
          >
            <FaArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
