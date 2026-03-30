import Footer from "@/components/footer/Footer";
import FeaturedCategories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Navbar from "@/components/navbar/Navbar";
import ProductCard from "@/components/productcard/ProductCard";
import Link from "next/link";

const Home = () => {
  // Example featured products (replace with fetch from backend later)
  const featuredProducts = [
    {
      id: "1",
      name: "Product 1",
      price: 49.99,
      image: "/images/products/product1.jpg",
    },
    {
      id: "2",
      name: "Product 2",
      price: 29.99,
      image: "/images/products/product2.jpg",
    },
    {
      id: "3",
      name: "Product 3",
      price: 19.99,
      image: "/images/products/product3.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </>
  );
};
export default Home;
