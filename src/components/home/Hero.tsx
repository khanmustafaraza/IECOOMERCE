import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4">
            New Collection
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            Shop smarter with modern essentials.
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
            Discover clean, stylish, and everyday products designed to fit your
            lifestyle with simplicity and elegance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300"
            >
              Shop Now <FiArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-full font-medium text-gray-800 hover:border-black hover:text-black transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="border border-dashed border-gray-300 rounded-3xl h-[450px] flex items-center justify-center text-gray-400 text-lg font-medium">
          <img
            className="h-full"
            src="https://imgs.search.brave.com/kOMEDBWHKrBxkuZVHTzwk3XfSCNzsTxUTf7O-uOOOAw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/OTkwMjc3NS9waG90/by95b3VuZy1hc2lh/bi13b21hbi1zaG9w/cGluZy1mb3ItbmF0/dXJhbC1iZWF1dHkt/cHJvZHVjdHMtaW4t/b3JnYW5pYy1oZWFs/dGgtYW5kLWJlYXV0/eS1zdG9yZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VFNo/a2dTVG4waWVpcUhZ/bEdHRENVUnd0RFRs/eUdBYXpjLXdGNmpz/dVhkQT0"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
