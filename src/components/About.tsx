import React from 'react';
import { Microscope, Target, RefreshCw, Users, Building, TrendingUp, Star } from 'lucide-react';

const About: React.FC = () => {
  const pillars = [
    {
      icon: <Microscope size={32} />,
      title: "Science-Based",
      description: "Grounded in validated psychological research and behavioral science principles"
    },
    {
      icon: <Target size={32} />,
      title: "Actionable", 
      description: "Provides practical insights you can immediately apply to improve your work and relationships"
    },
    {
      icon: <RefreshCw size={32} />,
      title: "Comprehensive",
      description: "Covers all aspects of workplace behavior, from communication to problem-solving approaches"
    }
  ];

  const stats = [
    { icon: <Users size={32} />, number: "50,000+", label: "Assessments Completed" },
    { icon: <Building size={32} />, number: "1,200+", label: "Organizations" },
    { icon: <TrendingUp size={32} />, number: "98%", label: "Accuracy Rate" },
    { icon: <Star size={32} />, number: "4.9/5", label: "User Rating" }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 font-display">
              About BBI Intelligence
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Built on decades of behavioral science research, the BBI Assessment provides accurate, actionable insights into how people naturally communicate and work. Our evidence-based approach helps individuals and organizations unlock their full potential.
            </p>
            
            {/* Pillars */}
            <div className="space-y-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2 font-display">{pillar.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="text-gray-400 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary-blue mb-2 font-display">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 