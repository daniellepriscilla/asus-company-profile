export type Product = {
  id: number;
  name: string;
  category: string;
  tagline: string;
  price: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "ASUS Zenbook 14",
    category: "Laptops",
    tagline: "Ultra-thin. Ultra-powerful.",
    price: "Rp 15.999.000",
    image: "/images/products/zenbook-14.jpg",
  },
  {
    id: 2,
    name: "ASUS Vivobook S 14",
    category: "Laptops",
    tagline: "Express yourself with style.",
    price: "Rp 12.999.000",
    image: "/images/products/vivobook-s14.jpg",
  },
  {
    id: 3,
    name: "ROG Zephyrus G14",
    category: "Gaming",
    tagline: "Power beyond expectations.",
    price: "Rp 24.999.000",
    image: "/images/products/rog-g14.jpg",
  },
  {
    id: 4,
    name: "ASUS ProArt Display",
    category: "Monitors",
    tagline: "Create without limits.",
    price: "Rp 8.999.000",
    image: "/images/products/proart-display.jpg",
  },
  {
    id: 5,
    name: "ASUS ROG Gaming Mouse",
    category: "Accessories",
    tagline: "Precision built for every move.",
    price: "Rp 899.000",
    image: "/images/products/rog-mouse.jpg",
  },
  {
    id: 6,
    name: "ASUS ROG Sheath Gaming Mouse Pad",
    category: "Accessories",
    tagline: "Extra large surface, superior grip.",
    price: "Rp 374.482",
    image: "/images/products/rog-sheath-mouse-pad.jpg",
  },
];