
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    unit: string;
    farmer: {
      name: string;
      distance: string;
    };
    organic?: boolean;
    freeDelivery?: boolean;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-2">
          {product.organic && <Badge variant="success">Organic</Badge>}
          {product.freeDelivery && <Badge variant="accent">Free Delivery</Badge>}
        </div>
        
        {/* Quick actions */}
        <div className={`absolute right-2 transition-all duration-300 ${isHovered ? 'top-2 opacity-100' : '-top-10 opacity-0'}`}>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
            <Heart size={18} className="text-gray-600 hover:text-red-500" />
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex-grow">
          <p className="text-xs text-gray-500 mb-1">From {product.farmer.name} • {product.farmer.distance}</p>
          <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
          <p className="text-primary text-lg font-semibold">${product.price.toFixed(2)} <span className="text-sm text-gray-500">/ {product.unit}</span></p>
        </div>
        
        {/* Add to cart button */}
        <div className="mt-4">
          <button className="w-full bg-primary hover:bg-primary-600 text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors">
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
