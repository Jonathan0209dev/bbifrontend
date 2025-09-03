import React from 'react';
import { Check } from 'lucide-react';

const TeamVisualization: React.FC = () => {
  const teamMembers = [
    { style: 'leader', label: 'Leader', avatar: 'L', position: 'top-5 left-5', color: 'from-red-500 to-red-600' },
    { style: 'collaborator', label: 'Collaborator', avatar: 'C', position: 'top-5 right-5', color: 'from-emerald-500 to-emerald-600' },
    { style: 'analyst', label: 'Analyst', avatar: 'A', position: 'bottom-5 left-5', color: 'from-blue-500 to-blue-600' },
    { style: 'supporter', label: 'Supporter', avatar: 'S', position: 'bottom-5 right-5', color: 'from-purple-500 to-purple-600' }
  ];

  return (
    <div className="relative w-72 h-72 mx-auto">
      {/* Connection Matrix */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none text-gray-300" viewBox="0 0 200 200">
        <line x1="50" y1="50" x2="150" y2="50" stroke="currentColor" opacity="0.6"/>
        <line x1="150" y1="50" x2="150" y2="150" stroke="currentColor" opacity="0.6"/>
        <line x1="150" y1="150" x2="50" y2="150" stroke="currentColor" opacity="0.6"/>
        <line x1="50" y1="150" x2="50" y2="50" stroke="currentColor" opacity="0.6"/>
        <line x1="50" y1="50" x2="150" y2="150" stroke="currentColor" opacity="0.3"/>
        <line x1="150" y1="50" x2="50" y2="150" stroke="currentColor" opacity="0.3"/>
      </svg>

      {/* Team Members */}
      {teamMembers.map((member) => (
        <div
          key={member.style}
          className={`absolute ${member.position} w-20 h-20 bg-gradient-to-r ${member.color} rounded-2xl flex flex-col items-center justify-center text-white cursor-pointer transition-transform duration-300 hover:scale-110`}
        >
          <div className="text-xl font-bold mb-1">{member.avatar}</div>
          <div className="text-xs font-semibold text-center">{member.label}</div>
        </div>
      ))}
    </div>
  );
};

const CommunicationFlow: React.FC = () => {
  const arrows = [
    { type: 'direct', label: 'Direct', color: 'from-red-500 to-red-600' },
    { type: 'collaborative', label: 'Collaborative', color: 'from-emerald-500 to-emerald-600' },
    { type: 'analytical', label: 'Analytical', color: 'from-blue-500 to-blue-600' }
  ];

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white text-2xl">
          📤
        </div>
        <div className="text-sm font-semibold text-gray-900">Sender</div>
      </div>

      <div className="flex flex-col gap-2 flex-1 mx-4">
        {arrows.map((arrow) => (
          <div
            key={arrow.type}
            className={`relative h-5 bg-gradient-to-r ${arrow.color} rounded flex items-center justify-center text-white text-xs font-semibold`}
          >
            {arrow.label}
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-2 border-b-2 border-l-4 border-t-transparent border-b-transparent border-l-current"></div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white text-2xl">
          📥
        </div>
        <div className="text-sm font-semibold text-gray-900">Receiver</div>
      </div>
    </div>
  );
};

const TalentPool: React.FC = () => {
  const categories = [
    { label: 'Leadership', value: 24, width: '75%' },
    { label: 'Analysis', value: 18, width: '60%' },
    { label: 'Collaboration', value: 32, width: '90%' },
    { label: 'Support', value: 16, width: '45%' }
  ];

  return (
    <div className="p-4">
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900">Talent Pool Dashboard</h4>
      </div>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.label} className="flex items-center gap-3">
            <div className="min-w-20 text-sm font-semibold text-gray-700">{category.label}</div>
            <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
              <div 
                className="h-full bg-gradient-primary rounded-full transition-all duration-500"
                style={{ width: category.width }}
              ></div>
            </div>
            <div className="min-w-8 text-right text-sm font-bold text-gray-900">{category.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface FeatureProps {
  visual: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  reverse?: boolean;
}

const Feature: React.FC<FeatureProps> = ({ visual, title, description, items, reverse = false }) => {
  return (
    <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
      <div className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-200 ${reverse ? 'lg:col-start-2' : ''}`}>
        {visual}
      </div>
      <div className={reverse ? 'lg:col-start-1' : ''}>
        <h3 className="text-3xl font-semibold text-gray-900 mb-4 font-display">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700 font-medium">
              <Check size={16} className="text-secondary-emerald mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Organizations: React.FC = () => {
  return (
    <section id="organizations" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
            For Organizations
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Build better teams with deeper insights into work and communication styles
          </p>
        </div>

        {/* Features */}
        <div className="space-y-20 mb-20">
          <Feature
            visual={<TeamVisualization />}
            title="Team Building"
            description="Create balanced teams with complementary styles and enhanced collaboration potential."
            items={[
              "Create balanced teams with complementary styles",
              "Identify potential communication friction points",
              "Build understanding between team members",
              "Optimize team composition for specific projects"
            ]}
          />

          <Feature
            visual={<CommunicationFlow />}
            title="Communication"
            description="Improve team collaboration through style awareness and reduce misunderstandings."
            items={[
              "Improve team collaboration through style awareness",
              "Reduce misunderstandings and conflict",
              "Enhance feedback and idea exchange",
              "Develop effective communication protocols"
            ]}
            reverse={true}
          />

          <Feature
            visual={<TalentPool />}
            title="Talent Management"
            description="Optimize talent allocation and development based on behavioral insights."
            items={[
              "Create talent pools based on work styles",
              "Match employees to suitable projects",
              "Develop targeted coaching strategies",
              "Identify high-potential individuals"
            ]}
          />
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-lg border border-gray-200">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4 font-display">
            Create Your Organization
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Get started with team assessments and unlock the full potential of your workforce.
          </p>
          <button className="btn btn-primary btn-large">
            Get Started for Organizations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Organizations; 