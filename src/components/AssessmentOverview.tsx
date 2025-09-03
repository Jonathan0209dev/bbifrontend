import React from 'react';
import { Check } from 'lucide-react';

const StyleDiagram: React.FC = () => {
  const categories = [
    { 
      id: 'communication', 
      icon: '💬', 
      label: 'Communication', 
      description: 'How you share and receive information',
      position: 'top-5 left-12'
    },
    { 
      id: 'work', 
      icon: '⚙️', 
      label: 'Work Style', 
      description: 'Your approach to tasks and collaboration',
      position: 'top-5 right-12'
    },
    { 
      id: 'feedback', 
      icon: '🔄', 
      label: 'Feedback', 
      description: 'Giving and receiving constructive input',
      position: 'bottom-5 left-12'
    },
    { 
      id: 'problem-solving', 
      icon: '🧩', 
      label: 'Problem Solving', 
      description: 'Your natural approach to challenges',
      position: 'bottom-5 right-12'
    }
  ];

  return (
    <div className="relative w-96 h-96 mx-auto">
      {/* Central Node */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-primary rounded-full flex flex-col items-center justify-center text-white font-bold shadow-xl z-10">
        <div className="text-3xl mb-1">👤</div>
        <div className="text-sm font-semibold">Your Style</div>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none text-gray-300" viewBox="0 0 400 400">
        <line x1="200" y1="200" x2="120" y2="120" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
        <line x1="200" y1="200" x2="280" y2="120" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
        <line x1="200" y1="200" x2="120" y2="280" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
        <line x1="200" y1="200" x2="280" y2="280" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
      </svg>

      {/* Category Nodes */}
      {categories.map((category) => (
        <div
          key={category.id}
          className={`absolute ${category.position} w-24 h-24 bg-white border-2 border-gray-200 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary-blue shadow-md`}
        >
          <div className="text-xl mb-1">{category.icon}</div>
          <div className="text-xs font-semibold text-gray-900 text-center mb-1">{category.label}</div>
          <div className="text-[10px] text-gray-600 text-center leading-tight px-1">{category.description}</div>
        </div>
      ))}
    </div>
  );
};

const CategoryDetail: React.FC<{ icon: string; title: string; items: string[] }> = ({ icon, title, items }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white text-xl">
          {icon}
        </div>
        <h4 className="text-xl font-semibold text-gray-900 font-display">{title}</h4>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-700 font-medium">
            <Check size={16} className="text-secondary-emerald mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AssessmentOverview: React.FC = () => {
  return (
    <section id="assessment" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
            Understanding Work & Communication Styles
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover how this assessment helps individuals and teams work better together through improved self-awareness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Visual Diagram */}
          <div className="relative">
            <StyleDiagram />
          </div>

          {/* Details */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-8 font-display">
              What This Assessment Measures
            </h3>
            
            <div className="space-y-8">
              <CategoryDetail
                icon="💬"
                title="Communication Preferences"
                items={[
                  "How you prefer to share and receive information",
                  "Your approach to giving and receiving feedback",
                  "Your natural communication style in team settings",
                  "Preferred methods for conflict resolution"
                ]}
              />
              
              <CategoryDetail
                icon="⚙️"
                title="Work Style Tendencies"
                items={[
                  "How you approach planning and execution",
                  "Your natural problem-solving patterns",
                  "Your preferences for collaboration and independence",
                  "Optimal work environment and conditions"
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentOverview; 