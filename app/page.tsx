import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ProductCategories from "@/components/home/ProductCategories";
import AboutSection from "@/components/home/AboutSection";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <FeaturedProducts />
      <ProductCategories />
      <AboutSection />
      <Newsletter />
    </main>
  );
}