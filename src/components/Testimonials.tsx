
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "The quality of produce I get from Farmer's Market is incomparable to supermarket goods. Everything tastes so fresh and I love knowing exactly where my food comes from.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Home Chef",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    quote: "As a home chef, ingredient quality is everything. The difference in taste when cooking with farm-fresh produce from this marketplace is remarkable. My dishes have never tasted better!",
    rating: 5
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    role: "Health Coach",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    quote: "I recommend Farmer's Market to all my clients. The organic options are abundant, and the nutritional difference is noticeable. It's a game-changer for healthy eating.",
    rating: 4
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-primary-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Customers Say</h2>
          <p className="text-gray-600">Hear from people who love the freshness and quality of our products</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                    <img 
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h4 className="font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                    {/* Star Rating */}
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonials[currentIndex].rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <svg
                    className="h-8 w-8 text-primary opacity-30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 italic mb-4">"{testimonials[currentIndex].quote}"</p>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
