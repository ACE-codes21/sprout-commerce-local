
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "p1",
    name: "Organic Tomatoes",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfad",
    price: 2.99,
    unit: "kg",
    farmer: {
      name: "Green Valley Farm",
      distance: "5 miles away"
    },
    organic: true,
    freeDelivery: false
  },
  {
    id: "p2",
    name: "Fresh Strawberries",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
    price: 4.50,
    unit: "box",
    farmer: {
      name: "Berry Good Farm",
      distance: "3 miles away"
    },
    organic: true,
    freeDelivery: true
  },
  {
    id: "p3",
    name: "Green Lettuce",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1",
    price: 1.99,
    unit: "piece",
    farmer: {
      name: "Fresh Fields",
      distance: "7 miles away"
    },
    organic: false,
    freeDelivery: false
  },
  {
    id: "p4",
    name: "Farm Fresh Eggs",
    image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05",
    price: 3.49,
    unit: "dozen",
    farmer: {
      name: "Happy Hen Farm",
      distance: "4 miles away"
    },
    organic: true,
    freeDelivery: true
  },
  {
    id: "p5",
    name: "Organic Carrots",
    image: "https://images.unsplash.com/photo-1582515073490-39981397c445",
    price: 2.29,
    unit: "kg",
    farmer: {
      name: "Green Valley Farm",
      distance: "5 miles away"
    },
    organic: true,
    freeDelivery: false
  },
  {
    id: "p6",
    name: "Local Honey",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924",
    price: 7.99,
    unit: "jar",
    farmer: {
      name: "Bee Haven",
      distance: "10 miles away"
    },
    organic: true,
    freeDelivery: false
  },
  {
    id: "p7",
    name: "Fresh Broccoli",
    image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c",
    price: 2.49,
    unit: "kg",
    farmer: {
      name: "Fresh Fields",
      distance: "7 miles away"
    },
    organic: false,
    freeDelivery: true
  },
  {
    id: "p8",
    name: "Artisan Bread",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
    price: 5.99,
    unit: "loaf",
    farmer: {
      name: "Country Bakery",
      distance: "2 miles away"
    },
    organic: false,
    freeDelivery: false
  },
];

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("popular");
  
  const getTabClass = (tab: string) => {
    return activeTab === tab
      ? "text-primary border-b-2 border-primary"
      : "text-gray-500 hover:text-primary";
  };
  
  const filterProducts = () => {
    switch (activeTab) {
      case "popular":
        return products.slice(0, 8);
      case "new":
        return products.slice(2, 6);
      case "organic":
        return products.filter(p => p.organic).slice(0, 4);
      case "delivery":
        return products.filter(p => p.freeDelivery).slice(0, 4);
      default:
        return products.slice(0, 8);
    }
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Featured Products</h2>
          
          {/* Tabs */}
          <div className="flex space-x-6 overflow-x-auto pb-2 md:pb-0">
            <button
              className={`pb-2 font-medium ${getTabClass("popular")}`}
              onClick={() => setActiveTab("popular")}
            >
              Popular
            </button>
            <button
              className={`pb-2 font-medium ${getTabClass("new")}`}
              onClick={() => setActiveTab("new")}
            >
              New Arrivals
            </button>
            <button
              className={`pb-2 font-medium ${getTabClass("organic")}`}
              onClick={() => setActiveTab("organic")}
            >
              Organic
            </button>
            <button
              className={`pb-2 font-medium ${getTabClass("delivery")}`}
              onClick={() => setActiveTab("delivery")}
            >
              Free Delivery
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/market"
            className="inline-flex items-center text-primary hover:text-primary-700 font-medium"
          >
            View All Products
            <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
