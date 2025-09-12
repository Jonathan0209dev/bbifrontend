import React from 'react';
import { Check } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const steps = [
    { id: 1, label: 'Personal Info', description: 'Basic information' },
    { id: 2, label: 'Assessment', description: 'BBI evaluation' },
    { id: 3, label: 'Goals', description: 'Development focus' },
    { id: 4, label: 'Complete', description: 'All done!' }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-4">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                {/* Step Circle */}
                <div className="flex items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      step.id < currentStep 
                        ? 'bg-green-500 text-white' 
                        : step.id === currentStep 
                          ? 'bg-primary-blue text-white' 
                          : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step.id < currentStep ? (
                      <Check size={20} />
                    ) : (
                      step.id
                    )}
                  </div>
                  
                  {/* Step Info */}
                  <div className="ml-3 hidden sm:block">
                    <div 
                      className={`font-medium text-sm ${
                        step.id <= currentStep ? 'text-gray-900' : 'text-gray-500'
                      }`}
                    >
                      {step.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {step.description}
                    </div>
                  </div>
                </div>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div 
                    className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                      step.id < currentStep ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Progress Percentage */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary-blue to-secondary-emerald h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
        
        {/* Step Counter */}
        <div className="text-center mt-2">
          <span className="text-sm font-medium text-gray-600">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
