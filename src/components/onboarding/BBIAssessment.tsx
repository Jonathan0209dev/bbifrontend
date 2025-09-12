import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Brain, MessageSquare, CheckCircle } from 'lucide-react';
import HEXACOSection from './assessment/HEXACOSection';
import CSISection from './assessment/CSISection';
import ICARSection from './assessment/ICARSection';
import AQ10Section from './assessment/AQ10Section';
import ASRSSection from './assessment/ASRSSection';

interface BBIAssessmentProps {
  data: {
    icar: any[];
    hexaco: { [key: string]: number };
    csi: { [key: string]: number };
    aq10: any[];
    asrs: any[];
  };
  onUpdate: (data: Partial<BBIAssessmentProps['data']>) => void;
  onNext: () => void;
  onBack: () => void;
}

const BBIAssessment: React.FC<BBIAssessmentProps> = ({ data, onUpdate, onNext, onBack }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [sectionData, setSectionData] = useState(data);

  // Assessment sections configuration
  const sections = [
    {
      id: 'hexaco',
      title: 'Personality Assessment',
      description: 'Understanding your personality traits and tendencies',
      icon: <Brain size={24} />,
      totalQuestions: 24
    },
    {
      id: 'csi',
      title: 'Communication Style',
      description: 'How you prefer to communicate and express yourself',
      icon: <MessageSquare size={24} />,
      totalQuestions: 16
    },
    {
      id: 'icar',
      title: 'Cognitive Assessment',
      description: 'Evaluating reasoning and problem-solving abilities',
      icon: <Brain size={24} />,
      totalQuestions: 10
    },
    {
      id: 'aq10',
      title: 'Autism Spectrum Assessment',
      description: 'Understanding cognitive patterns and preferences',
      icon: <CheckCircle size={24} />,
      totalQuestions: 10
    },
    {
      id: 'asrs',
      title: 'ADHD Assessment',
      description: 'Evaluating attention and focus patterns',
      icon: <CheckCircle size={24} />,
      totalQuestions: 18
    }
  ];

  const updateSectionData = (sectionId: string, newData: any) => {
    const updated = { ...sectionData, [sectionId]: newData };
    setSectionData(updated);
    onUpdate(updated);
  };

  const handleNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      onNext();
    }
  };

  const handlePrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    } else {
      onBack();
    }
  };

  const getCurrentSectionProgress = () => {
    const section = sections[currentSection];
    const sectionId = section.id;
    
    switch (sectionId) {
      case 'hexaco':
        return Object.keys(sectionData.hexaco).length;
      case 'csi':
        return Object.keys(sectionData.csi).length;
      case 'icar':
        return sectionData.icar.length;
      case 'aq10':
        return sectionData.aq10.length;
      case 'asrs':
        return sectionData.asrs.length;
      default:
        return 0;
    }
  };

  const isCurrentSectionComplete = () => {
    const section = sections[currentSection];
    const progress = getCurrentSectionProgress();
    return progress >= section.totalQuestions;
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Assessment Header */}
        <div className="bg-gradient-to-r from-primary-blue to-secondary-emerald text-white p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              {sections[currentSection].icon}
              <div className="ml-3">
                <h1 className="text-2xl font-bold">
                  {sections[currentSection].title}
                </h1>
                <p className="text-white/90">
                  {sections[currentSection].description}
                </p>
              </div>
            </div>
            
            {/* Section Progress */}
            <div className="text-right">
              <div className="text-sm opacity-90">Section</div>
              <div className="text-xl font-bold">
                {currentSection + 1} of {sections.length}
              </div>
            </div>
          </div>
          
          {/* Overall Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${((currentSection + (getCurrentSectionProgress() / sections[currentSection].totalQuestions)) / sections.length) * 100}%` 
              }}
            />
          </div>
          
          {/* Question Counter */}
          <div className="text-center mt-2 text-sm opacity-90">
            Question {getCurrentSectionProgress()} of {sections[currentSection].totalQuestions} in this section
          </div>
        </div>

        {/* Assessment Content */}
        <div className="p-8">
          {currentSection === 0 && (
            <HEXACOSection
              data={sectionData.hexaco}
              onUpdate={(newData: { [key: string]: number }) => updateSectionData('hexaco', newData)}
            />
          )}
          {currentSection === 1 && (
            <CSISection
              data={sectionData.csi}
              onUpdate={(newData: { [key: string]: number }) => updateSectionData('csi', newData)}
            />
          )}
          {currentSection === 2 && (
            <ICARSection
              data={sectionData.icar}
              onUpdate={(newData: any[]) => updateSectionData('icar', newData)}
            />
          )}
          {currentSection === 3 && (
            <AQ10Section
              data={sectionData.aq10}
              onUpdate={(newData: any[]) => updateSectionData('aq10', newData)}
            />
          )}
          {currentSection === 4 && (
            <ASRSSection
              data={sectionData.asrs}
              onUpdate={(newData: any[]) => updateSectionData('asrs', newData)}
            />
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center p-8 bg-gray-50 border-t">
          <button
            onClick={handlePrevSection}
            className="flex items-center px-6 py-3 text-gray-600 font-semibold border-2 border-gray-300 rounded-2xl transition-all hover:border-gray-400 hover:text-gray-700"
          >
            <ArrowLeft className="mr-2" size={20} />
            {currentSection === 0 ? 'Back to Info' : 'Previous Section'}
          </button>
          
          <div className="flex items-center space-x-4">
            {/* Section Indicators */}
            <div className="flex space-x-2">
              {sections.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index < currentSection 
                      ? 'bg-green-500' 
                      : index === currentSection 
                        ? 'bg-primary-blue' 
                        : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNextSection}
              disabled={!isCurrentSectionComplete()}
              className={`flex items-center px-6 py-3 font-semibold rounded-2xl transition-all ${
                isCurrentSectionComplete()
                  ? 'bg-gradient-to-r from-primary-blue to-secondary-emerald text-white hover:shadow-lg hover:-translate-y-0.5'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentSection === sections.length - 1 ? 'Complete Assessment' : 'Next Section'}
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BBIAssessment;
