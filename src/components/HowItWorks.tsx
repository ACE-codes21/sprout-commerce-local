
import { ShoppingCart, Truck, User } from "lucide-react";

const steps = [
  {
    icon: <ShoppingCart className="h-12 w-12 text-white" />,
    title: "Browse & Order",
    description: "Browse fresh produce from local farmers and add your favorites to cart."
  },
  {
    icon: <Truck className="h-12 w-12 text-white" />,
    title: "Delivery or Pickup",
    description: "Choose between convenient home delivery or farm pickup options."
  },
  {
    icon: <User className="h-12 w-12 text-white" />,
    title: "Support Local Farmers",
    description: "Enjoy fresh produce while supporting sustainable local agriculture."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">How It Works</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Getting fresh produce from local farms to your table is simple with our three-step process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
