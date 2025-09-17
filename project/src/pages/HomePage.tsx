import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Database, FileText, ArrowRight, Users, Target, Globe } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Map className="h-8 w-8 text-green-600" />,
      title: 'Interactive FRA Atlas',
      description: 'Explore forest rights areas with comprehensive WebGIS mapping and layer visualization.',
      link: '/atlas',
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: 'Decision Support System',
      description: 'Get AI-powered recommendations for government schemes based on community resources.',
      link: '/dss',
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      title: 'Digitized Records',
      description: 'Access and search through digitized FRA claims and community records.',
      link: '/records',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      {/* Hero + About merged */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            FRA Atlas & <span className="text-green-600">Decision Support System</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Empowering forest communities through digital transformation of the Forest Rights Act, 2006. 
            Mapping rights, preserving heritage, and enabling informed decisions for sustainable development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-10">
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower tribal and forest-dwelling communities through transparent, efficient and equitable
                implementation of forest rights, while promoting sustainable development and cultural preservation.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A future where every community has secure land rights, access to appropriate schemes, and the
                tools needed for sustainable development while preserving ecological wisdom.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">5,000+</div>
            <div className="text-gray-600">FRA Claims</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">200+</div>
            <div className="text-gray-600">Villages Mapped</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">50+</div>
            <div className="text-gray-600">Government Schemes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">15</div>
            <div className="text-gray-600">States Covered</div>
          </div>
        </div>

        {/* Features Section (visible after login due to ProtectedRoute) */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comprehensive Forest Rights Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-4 flex items-center text-green-600 font-medium group-hover:translate-x-1 transition-transform">
                      Learn more <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA hidden; dashboard links appear in cards above */}
      </div>
    </div>
  );
};

export default HomePage;