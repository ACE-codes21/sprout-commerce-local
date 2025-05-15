
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-primary-600 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to taste the difference?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join our community of health-conscious consumers and support local agriculture. Fresh, sustainable, and delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/market"
              className="bg-white text-primary hover:bg-gray-100 font-medium px-8 py-3 rounded-md transition-colors"
            >
              Shop Now
            </Link>
            <Link
              to="/how-it-works"
              className="bg-transparent text-white border border-white hover:bg-white/10 font-medium px-8 py-3 rounded-md transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
