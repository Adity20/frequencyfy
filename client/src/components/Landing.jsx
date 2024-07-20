import React from 'react';
import PropTypes from 'prop-types';
import { CheckCircle, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import './App.css'
const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Platform</h1>
          <p className="text-xl mb-8">A modern way of earning rewards</p>
          <button className="px-8 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<CheckCircle className="w-12 h-12 text-blue-500 mb-4" />}
              title="User Friendly"
              description="Our platform is designed with a focus on user experience and ease of use."
            />
            <FeatureCard
              icon={<Globe className="w-12 h-12 text-green-500 mb-4" />}
              title="Global Access"
              description="Access our services from anywhere in the world, at any time."
            />
            <FeatureCard
              icon={<Shield className="w-12 h-12 text-yellow-500 mb-4" />}
              title="Secure"
              description="We prioritize security to ensure your data is always protected."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8">Join us today and experience the difference.</p>
          <Link to="/auth" className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600">
      Sign Up Now
    </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default LandingPage;
