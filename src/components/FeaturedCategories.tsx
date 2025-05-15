
import { Link } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

const categories: Category[] = [
  {
    id: "vegetables",
    name: "Vegetables",
    image: "https://images.unsplash.com/photo-1518843875459-f738682238a6",
    count: 24
  },
  {
    id: "fruits",
    name: "Fruits",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf",
    count: 18
  },
  {
    id: "dairy",
    name: "Dairy",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da",
    count: 12
  },
  {
    id: "herbs",
    name: "Herbs",
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662",
    count: 8
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Shop by Category</h2>
          <p className="text-gray-600">Explore our wide range of farm-fresh categories</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="group"
            >
              <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                    <p className="text-white/80 text-sm">{category.count} products</p>
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

export default FeaturedCategories;
