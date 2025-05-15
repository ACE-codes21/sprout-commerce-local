
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const farmers = [
  {
    id: "f1",
    name: "Green Valley Farms",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    products: 24,
    rating: 4.8,
    location: "Springfield, CA",
    specialty: "Organic Vegetables"
  },
  {
    id: "f2",
    name: "Happy Hen Farm",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    products: 16,
    rating: 4.7,
    location: "Riverdale, TX",
    specialty: "Free Range Eggs"
  },
  {
    id: "f3",
    name: "Berry Good Farm",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    products: 32,
    rating: 4.9,
    location: "Portland, OR",
    specialty: "Seasonal Berries"
  }
];

const FeaturedFarmers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Meet Our Farmers</h2>
            <p className="text-gray-600 max-w-xl">
              Get to know the local farmers who grow your food with passion and care
            </p>
          </div>
          <Link
            to="/farmers"
            className="mt-4 md:mt-0 inline-flex items-center bg-white text-primary border border-primary hover:bg-primary hover:text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            All Farmers
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {farmers.map((farmer) => (
            <Link
              key={farmer.id}
              to={`/farmer/${farmer.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={farmer.image}
                    alt={farmer.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{farmer.name}</h3>
                    <p className="text-gray-500 text-sm">{farmer.location}</p>
                  </div>
                </div>
                
                <div className="mb-4 flex items-center text-amber-500">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(farmer.rating) ? 'fill-current' : 'stroke-current fill-none'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-2">{farmer.rating}/5</span>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Specialty:</span>
                    <span className="font-medium">{farmer.specialty}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>Products:</span>
                    <span className="font-medium">{farmer.products} items</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFarmers;
