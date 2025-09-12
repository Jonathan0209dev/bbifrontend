import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Target, CheckCircle } from 'lucide-react';

interface DevelopmentalGoalsProps {
  data: string[];
  onUpdate: (goals: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const DevelopmentalGoals: React.FC<DevelopmentalGoalsProps> = ({ data, onUpdate, onNext, onBack }) => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>(data || []);
  const [hoveredGoal, setHoveredGoal] = useState<string | null>(null);

  // 9 developmental goals as specified
  const developmentalGoals = [
    {
      id: 'communication',
      title: 'Communication Skills',
      icon: '💬',
      description: 'Includes verbal, written, and interpersonal communication. Strong communicators listen effectively, convey ideas clearly, and adapt their message to different audiences.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'time-management',
      title: 'Time Management and Organization',
      icon: '⏰',
      description: 'Encompasses prioritizing tasks, managing deadlines, and efficiently allocating resources. Good time managers reduce stress and increase overall productivity.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'leadership',
      title: 'Leadership and Management',
      icon: '👑',
      description: 'Involves motivating teams, guiding projects, and making strategic decisions. Effective leaders also mentor and support their colleagues\' growth.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'collaboration',
      title: 'Collaboration and Teamwork',
      icon: '🤝',
      description: 'Focuses on working harmoniously with diverse groups, sharing responsibilities, and combining strengths to achieve common objectives.',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'problem-solving',
      title: 'Problem-Solving and Critical Thinking',
      icon: '🧩',
      description: 'Entails analyzing complex issues, brainstorming innovative solutions, and evaluating outcomes. Strong problem-solvers approach challenges methodically and creatively.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'adaptability',
      title: 'Adaptability and Flexibility',
      icon: '🌊',
      description: 'Involves remaining open to change, learning new skills quickly, and adjusting to evolving roles or priorities without sacrificing quality.',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'emotional-intelligence',
      title: 'Emotional Intelligence',
      icon: '🧠',
      description: 'Revolves around self-awareness, empathy, and managing one\'s own emotions and reactions. Colleagues with high emotional intelligence foster better relationships and resolve conflicts more easily.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'conflict-resolution',
      title: 'Conflict Resolution',
      icon: '⚖️',
      description: 'Entails understanding differing perspectives, mediating disagreements, and finding common ground. Good conflict resolution promotes a positive and productive work environment.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'technical-proficiency',
      title: 'Technical Proficiency',
      icon: '⚙️',
      description: 'Refers to industry-specific knowledge and the ability to use relevant tools or software effectively. Continued technical skill development helps professionals stay current and competitive.',
      color: 'from-slate-500 to-gray-500'
    }
  ];

  const toggleGoal = (goalId: string) => {
    const newSelectedGoals = selectedGoals.includes(goalId)
      ? selectedGoals.filter(id => id !== goalId)
      : [...selectedGoals, goalId];
    
    setSelectedGoals(newSelectedGoals);
    onUpdate(newSelectedGoals);
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-blue to-secondary-emerald text-white p-8">
          <div className="flex items-center mb-4">
            <Target className="mr-3" size={32} />
            <div>
              <h1 className="text-3xl font-bold">Development Goals</h1>
              <p className="text-white/90">
                Choose areas where you'd like to focus your professional development
              </p>
            </div>
          </div>
          
          {/* Selection Counter */}
          <div className="bg-white/20 rounded-xl p-3 inline-block">
            <div className="text-sm opacity-90">Selected Goals</div>
            <div className="text-xl font-bold">
              {selectedGoals.length} of {developmentalGoals.length}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="p-8 border-b border-gray-200">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Instructions</h3>
            <p className="text-blue-800 mb-3">
              Select the professional development areas that are most important to you right now. 
              You can choose as many or as few as you'd like - these will help us provide personalized insights.
            </p>
            <p className="text-blue-700 text-sm">
              <strong>Tip:</strong> Hover over each goal to see a detailed description of what it includes.
            </p>
          </div>
        </div>

        {/* Goals Grid */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentalGoals.map((goal) => (
              <div
                key={goal.id}
                className={`
                  relative cursor-pointer transition-all duration-300 rounded-2xl border-2 overflow-hidden
                  ${selectedGoals.includes(goal.id)
                    ? 'border-primary-blue shadow-lg transform -translate-y-1'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }
                `}
                onClick={() => toggleGoal(goal.id)}
                onMouseEnter={() => setHoveredGoal(goal.id)}
                onMouseLeave={() => setHoveredGoal(null)}
              >
                {/* Goal Card */}
                <div className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-r ${goal.color} rounded-xl flex items-center justify-center text-white text-xl mr-3`}>
                        {goal.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg leading-tight">
                          {goal.title}
                        </h4>
                      </div>
                    </div>
                    
                    {/* Selection Indicator */}
                    <div className={`
                      w-6 h-6 rounded-full border-2 transition-all duration-200
                      ${selectedGoals.includes(goal.id)
                        ? 'border-primary-blue bg-primary-blue'
                        : 'border-gray-300'
                      }
                    `}>
                      {selectedGoals.includes(goal.id) && (
                        <CheckCircle className="text-white" size={20} />
                      )}
                    </div>
                  </div>

                  {/* Description (shown on hover or when selected) */}
                  <div className={`
                    transition-all duration-300 overflow-hidden
                    ${hoveredGoal === goal.id || selectedGoals.includes(goal.id)
                      ? 'max-h-40 opacity-100'
                      : 'max-h-0 opacity-0'
                    }
                  `}>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>

                {/* Selected Indicator Bar */}
                {selectedGoals.includes(goal.id) && (
                  <div className={`h-1 bg-gradient-to-r ${goal.color}`} />
                )}
              </div>
            ))}
          </div>

          {/* Selected Goals Summary */}
          {selectedGoals.length > 0 && (
            <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Your Selected Development Goals:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedGoals.map(goalId => {
                  const goal = developmentalGoals.find(g => g.id === goalId);
                  return goal ? (
                    <span
                      key={goalId}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${goal.color}`}
                    >
                      <span className="mr-1">{goal.icon}</span>
                      {goal.title}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center p-8 bg-gray-50 border-t">
          <button
            onClick={onBack}
            className="flex items-center px-6 py-3 text-gray-600 font-semibold border-2 border-gray-300 rounded-2xl transition-all hover:border-gray-400 hover:text-gray-700"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Assessment
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              {selectedGoals.length > 0 
                ? `${selectedGoals.length} goal${selectedGoals.length > 1 ? 's' : ''} selected`
                : 'Optional: Select your development focus areas'
              }
            </div>
            
            <button
              onClick={handleNext}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-primary-blue to-secondary-emerald text-white font-semibold rounded-2xl transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Complete Onboarding
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentalGoals;
