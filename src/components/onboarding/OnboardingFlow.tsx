import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import PersonalInfo from './PersonalInfo';
import BBIAssessment from './BBIAssessment';
import DevelopmentalGoals from './DevelopmentalGoals';
import OnboardingComplete from './OnboardingComplete';
import ProgressBar from './ProgressBar';

export interface OnboardingData {
  personalInfo: {
    firstName: string;
    lastName: string;
    role: string;
    password: string;
    email: string;
    organization: string;
  };
  assessmentResults: {
    icar: any[];
    hexaco: { [key: string]: number };
    csi: { [key: string]: number };
    aq10: any[];
    asrs: any[];
  };
  developmentalGoals: string[];
}

const OnboardingFlow: React.FC = () => {
  const navigate = useNavigate();
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      role: '',
      password: '',
      email: '',
      organization: ''
    },
    assessmentResults: {
      icar: [],
      hexaco: {},
      csi: {},
      aq10: [],
      asrs: []
    },
    developmentalGoals: []
  });

  const updatePersonalInfo = (data: Partial<OnboardingData['personalInfo']>) => {
    setOnboardingData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...data }
    }));
  };

  const updateAssessmentResults = (data: Partial<OnboardingData['assessmentResults']>) => {
    setOnboardingData(prev => ({
      ...prev,
      assessmentResults: { ...prev.assessmentResults, ...data }
    }));
  };

  const updateDevelopmentalGoals = (goals: string[]) => {
    setOnboardingData(prev => ({
      ...prev,
      developmentalGoals: goals
    }));
  };

  const getCurrentStep = () => {
    const path = window.location.pathname;
    if (path.includes('/personal-info')) return 1;
    if (path.includes('/assessment')) return 2;
    if (path.includes('/goals')) return 3;
    if (path.includes('/complete')) return 4;
    return 1;
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Progress Bar */}
      <ProgressBar currentStep={getCurrentStep()} totalSteps={4} />
      
      {/* Main Content */}
      <div className="pt-20 pb-24">
        <Routes>
          <Route 
            path="/" 
            element={<Navigate to="/onboarding/personal-info" replace />} 
          />
          <Route 
            path="/personal-info" 
            element={
              <PersonalInfo 
                data={onboardingData.personalInfo}
                onUpdate={updatePersonalInfo}
                onNext={() => navigate('/onboarding/assessment')}
              />
            } 
          />
          <Route 
            path="/assessment" 
            element={
              <BBIAssessment 
                data={onboardingData.assessmentResults}
                onUpdate={updateAssessmentResults}
                onNext={() => navigate('/onboarding/goals')}
                onBack={() => navigate('/onboarding/personal-info')}
              />
            } 
          />
          <Route 
            path="/goals" 
            element={
              <DevelopmentalGoals 
                data={onboardingData.developmentalGoals}
                onUpdate={updateDevelopmentalGoals}
                onNext={() => navigate('/onboarding/complete')}
                onBack={() => navigate('/onboarding/assessment')}
              />
            } 
          />
          <Route 
            path="/complete" 
            element={
              <OnboardingComplete 
                data={onboardingData}
              />
            } 
          />
        </Routes>
      </div>
    </div>
  );
};

export default OnboardingFlow;
