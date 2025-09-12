import React from 'react';
import { CheckCircle, User, Brain, Target, BarChart3, ArrowRight } from 'lucide-react';
import { OnboardingData } from './OnboardingFlow';

interface OnboardingCompleteProps {
  data: OnboardingData;
}

const OnboardingComplete: React.FC<OnboardingCompleteProps> = ({ data }) => {
  const developmentalGoals = [
    { id: 'communication', title: 'Communication Skills', icon: '💬' },
    { id: 'time-management', title: 'Time Management and Organization', icon: '⏰' },
    { id: 'leadership', title: 'Leadership and Management', icon: '👑' },
    { id: 'collaboration', title: 'Collaboration and Teamwork', icon: '🤝' },
    { id: 'problem-solving', title: 'Problem-Solving and Critical Thinking', icon: '🧩' },
    { id: 'adaptability', title: 'Adaptability and Flexibility', icon: '🌊' },
    { id: 'emotional-intelligence', title: 'Emotional Intelligence', icon: '🧠' },
    { id: 'conflict-resolution', title: 'Conflict Resolution', icon: '⚖️' },
    { id: 'technical-proficiency', title: 'Technical Proficiency', icon: '⚙️' }
  ];

  const getSelectedGoalTitles = () => {
    return data.developmentalGoals.map(goalId => {
      const goal = developmentalGoals.find(g => g.id === goalId);
      return goal ? goal.title : goalId;
    });
  };

  const getAssessmentSummary = () => {
    const hexacoCount = Object.keys(data.assessmentResults.hexaco).length;
    const csiCount = Object.keys(data.assessmentResults.csi).length;
    const icarCount = data.assessmentResults.icar.length;
    const aq10Count = data.assessmentResults.aq10.length;
    const asrsCount = data.assessmentResults.asrs.length;
    
    return {
      hexaco: { completed: hexacoCount, total: 24 },
      csi: { completed: csiCount, total: 16 },
      icar: { completed: icarCount, total: 10 },
      aq10: { completed: aq10Count, total: 10 },
      asrs: { completed: asrsCount, total: 18 }
    };
  };

  const assessmentSummary = getAssessmentSummary();
  const totalQuestions = 24 + 16 + 10 + 10 + 18; // 78 total
  const totalCompleted = assessmentSummary.hexaco.completed + 
                         assessmentSummary.csi.completed + 
                         assessmentSummary.icar.completed + 
                         assessmentSummary.aq10.completed + 
                         assessmentSummary.asrs.completed;

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Success Header */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Onboarding Complete!</h1>
          <p className="text-white/90 text-lg">
            Welcome to BBI Intelligence, {data.personalInfo.firstName}!
          </p>
        </div>

        {/* Summary Content */}
        <div className="p-8 space-y-8">
          {/* Personal Information Summary */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <User className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-blue-900">Your Profile</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-blue-700">Name:</span>
                <span className="ml-2 text-blue-900">
                  {data.personalInfo.firstName} {data.personalInfo.lastName}
                </span>
              </div>
              <div>
                <span className="font-medium text-blue-700">Role:</span>
                <span className="ml-2 text-blue-900">{data.personalInfo.role}</span>
              </div>
              <div>
                <span className="font-medium text-blue-700">Email:</span>
                <span className="ml-2 text-blue-900">{data.personalInfo.email}</span>
              </div>
              <div>
                <span className="font-medium text-blue-700">Organization:</span>
                <span className="ml-2 text-blue-900">{data.personalInfo.organization}</span>
              </div>
            </div>
          </div>

          {/* Assessment Summary */}
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <Brain className="text-purple-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-purple-900">Assessment Results</h3>
            </div>
            
            {/* Overall Progress */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-purple-700">Overall Completion</span>
                <span className="text-purple-900 font-semibold">
                  {totalCompleted} / {totalQuestions} questions ({Math.round((totalCompleted / totalQuestions) * 100)}%)
                </span>
              </div>
              <div className="w-full bg-purple-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(totalCompleted / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            {/* Individual Assessment Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-purple-700">🧠 HEXACO Personality</span>
                  <span className="text-sm text-purple-900">
                    {assessmentSummary.hexaco.completed}/{assessmentSummary.hexaco.total}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-purple-700">💬 Communication Style</span>
                  <span className="text-sm text-purple-900">
                    {assessmentSummary.csi.completed}/{assessmentSummary.csi.total}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-purple-700">🎯 Cognitive Assessment</span>
                  <span className="text-sm text-purple-900">
                    {assessmentSummary.icar.completed}/{assessmentSummary.icar.total}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-purple-700">🔍 AQ-10 Assessment</span>
                  <span className="text-sm text-purple-900">
                    {assessmentSummary.aq10.completed}/{assessmentSummary.aq10.total}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-purple-700">⚡ ADHD Assessment</span>
                  <span className="text-sm text-purple-900">
                    {assessmentSummary.asrs.completed}/{assessmentSummary.asrs.total}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Development Goals Summary */}
          {data.developmentalGoals.length > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Target className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-green-900">Development Goals</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {getSelectedGoalTitles().map((title, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700"
                  >
                    {title}
                  </span>
                ))}
              </div>
              {data.developmentalGoals.length === 0 && (
                <p className="text-green-700 text-sm">No specific development goals selected</p>
              )}
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <BarChart3 className="text-gray-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">What's Next?</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                <span>Your assessment results are being processed</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                <span>You'll receive a detailed behavioral profile within 24 hours</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                <span>Your manager can now include you in team matching and project planning</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                <span>Access your dashboard to track team compatibility and performance metrics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-8 bg-gray-50 border-t flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-blue to-secondary-emerald text-white font-semibold rounded-2xl transition-all hover:shadow-lg hover:-translate-y-0.5 group">
            <span>Go to Dashboard</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <button className="flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl transition-all hover:border-gray-400 hover:bg-gray-50">
            Download Report Summary
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingComplete;
