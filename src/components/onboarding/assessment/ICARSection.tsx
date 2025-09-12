import React, { useState, useEffect } from 'react';

interface ICARSectionProps {
  data: any[];
  onUpdate: (data: any[]) => void;
}

const ICARSection: React.FC<ICARSectionProps> = ({ data, onUpdate }) => {
  const [responses, setResponses] = useState<any[]>(data || []);

  // Placeholder ICAR questions - these would need to be replaced with actual ICAR matrix and verbal reasoning questions
  const questions = [
    { id: 'icar1', text: 'Matrix reasoning question 1 (placeholder)', type: 'matrix' },
    { id: 'icar2', text: 'Matrix reasoning question 2 (placeholder)', type: 'matrix' },
    { id: 'icar3', text: 'Matrix reasoning question 3 (placeholder)', type: 'matrix' },
    { id: 'icar4', text: 'Verbal reasoning question 1 (placeholder)', type: 'verbal' },
    { id: 'icar5', text: 'Verbal reasoning question 2 (placeholder)', type: 'verbal' },
    { id: 'icar6', text: 'Verbal reasoning question 3 (placeholder)', type: 'verbal' },
    { id: 'icar7', text: 'Matrix reasoning question 4 (placeholder)', type: 'matrix' },
    { id: 'icar8', text: 'Matrix reasoning question 5 (placeholder)', type: 'matrix' },
    { id: 'icar9', text: 'Verbal reasoning question 4 (placeholder)', type: 'verbal' },
    { id: 'icar10', text: 'Verbal reasoning question 5 (placeholder)', type: 'verbal' }
  ];

  const handleResponse = (questionId: string, answer: string) => {
    const newResponses = [...responses];
    const existingIndex = newResponses.findIndex(r => r.questionId === questionId);
    
    if (existingIndex >= 0) {
      newResponses[existingIndex] = { questionId, answer };
    } else {
      newResponses.push({ questionId, answer });
    }
    
    setResponses(newResponses);
    onUpdate(newResponses);
  };

  useEffect(() => {
    setResponses(data || []);
  }, [data]);

  return (
    <div className="space-y-8">
      {/* Instructions */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
        <h3 className="font-semibold text-green-900 mb-2">Cognitive Assessment (ICAR)</h3>
        <p className="text-green-800 mb-3">
          This section measures your reasoning abilities through matrix and verbal questions.
        </p>
        <div className="text-sm text-green-700">
          <strong>Note:</strong> This is a placeholder implementation. The actual ICAR assessment would include specific matrix reasoning and verbal reasoning questions from the ICAR catalogue.
        </div>
      </div>

      {/* Placeholder Notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
        <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Development Notice</h4>
        <p className="text-yellow-800">
          The ICAR assessment requires access to the official ICAR question bank from 
          <a href="https://icar-project.com/ICAR_Catalogue.pdf" className="text-yellow-900 underline ml-1" target="_blank" rel="noopener noreferrer">
            ICAR Project
          </a>. 
          Placeholder questions are shown below for demo purposes.
        </p>
      </div>

      {/* Placeholder Questions */}
      <div className="space-y-6">
        {questions.map((question, index) => (
          <div key={question.id} className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    question.type === 'matrix' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {question.type === 'matrix' ? 'Matrix Reasoning' : 'Verbal Reasoning'}
                  </span>
                </div>
                <p className="text-lg font-medium text-gray-900">
                  {question.text}
                </p>
              </div>
            </div>

            {/* Placeholder answer options */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['A', 'B', 'C', 'D'].map((option) => (
                <label
                  key={option}
                  className={`
                    cursor-pointer transition-all duration-200 p-3 rounded-xl border-2 text-center
                    ${responses.find(r => r.questionId === question.id)?.answer === option
                      ? 'border-green-500 bg-green-500 text-white'
                      : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
                    }
                  `}
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={option}
                    checked={responses.find(r => r.questionId === question.id)?.answer === option}
                    onChange={() => handleResponse(question.id, option)}
                    className="sr-only"
                  />
                  <div className="font-semibold">
                    Option {option}
                  </div>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Summary */}
      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-gray-900">Cognitive Assessment Progress</h4>
            <p className="text-gray-600">
              {responses.length} of {questions.length} questions completed
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">
              {Math.round((responses.length / questions.length) * 100)}%
            </div>
            <div className="text-sm text-gray-600">Complete</div>
          </div>
        </div>
        
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(responses.length / questions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ICARSection;
