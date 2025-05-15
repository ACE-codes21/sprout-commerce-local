
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-100 to-primary-200 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Fresh From The Farm <br />
              <span className="text-primary">To Your Table</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Connect directly with local farmers and enjoy fresh, sustainable produce delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                to="/market"
                className="bg-primary hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-md text-center transition-colors"
              >
                Shop Now
              </Link>
              <Link
                to="/farmers"
                className="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-6 rounded-md border border-primary text-center transition-colors"
              >
                Meet Our Farmers
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                  alt="Fresh farm produce"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">100% Organic</p>
                    <p className="text-sm text-gray-500">Farm verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
