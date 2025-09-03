import React from 'react';
import { Clock, CheckCircle, Target, Users } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  isPrimary?: boolean;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, features, isPrimary = false }) => {
  return (
    <div className={`relative bg-white border border-gray-200 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden group ${
      isPrimary ? 'bg-gradient-to-br from-white to-primary-blue/5 border-primary-blue' : ''
    }`}>
      {/* Top border indicator */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-primary transform transition-transform duration-300 ${
        isPrimary ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`}></div>
      
      {/* Icon */}
      <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center text-white mb-6">
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-display">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      {/* Features */}
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="text-gray-700 text-sm font-medium">
            ✓ {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Clock size={32} />,
      title: "Increased Self-Awareness",
      description: "Understand your natural tendencies and preferences, allowing you to leverage strengths and navigate challenges more effectively.",
      features: [
        "Recognize your communication patterns",
        "Identify your work style preferences", 
        "Understand your decision-making process"
      ],
      isPrimary: true
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Improved Collaboration",
      description: "Recognize how your style interacts with others, enabling more effective teamwork and reducing potential conflicts.",
      features: [
        "Better team communication",
        "Reduced workplace friction",
        "Enhanced project outcomes"
      ]
    },
    {
      icon: <Target size={32} />,
      title: "Enhanced Performance",
      description: "Optimize your work approach based on your natural style, leading to increased productivity and job satisfaction.",
      features: [
        "Improved task management",
        "Better stress management", 
        "Increased job satisfaction"
      ]
    },
    {
      icon: <Users size={32} />,
      title: "Strategic Development",
      description: "Create targeted development plans based on your unique style profile to accelerate your professional growth.",
      features: [
        "Personalized growth plans",
        "Skill development focus",
        "Career path optimization"
      ]
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
            Benefits of Understanding Your Style
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Unlock your potential and improve team dynamics through behavioral insights
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              features={benefit.features}
              isPrimary={benefit.isPrimary}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 