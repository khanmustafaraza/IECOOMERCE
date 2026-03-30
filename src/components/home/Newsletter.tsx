const Newsletter = () => {
  return (
    <section className="px-6 py-16">
      <div className="max-w-5xl mx-auto border border-gray-200 rounded-3xl p-10 md:p-14 text-center">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4">
          Stay Updated
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Subscribe to our newsletter
        </h2>
        <p className="mt-4 text-gray-600 text-lg leading-8 max-w-2xl mx-auto">
          Get updates on new arrivals, special offers, and curated collections.
        </p>

        <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border border-gray-300 rounded-full px-5 py-3 outline-none focus:border-black transition-all duration-300 text-sm"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
