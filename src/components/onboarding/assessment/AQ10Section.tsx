import React, { useState, useEffect } from 'react';

interface AQ10SectionProps {
  data: any[];
  onUpdate: (data: any[]) => void;
}

const AQ10Section: React.FC<AQ10SectionProps> = ({ data, onUpdate }) => {
  const [responses, setResponses] = useState<any[]>(data || []);

  // AQ10 questions - these would be sourced from the official AQ10 document
  const questions = [
    { id: 'aq1', text: 'I often notice small sounds when others do not.' },
    { id: 'aq2', text: 'I usually concentrate more on the whole picture, rather than the small details.' },
    { id: 'aq3', text: 'I find it easy to do more than one thing at once.' },
    { id: 'aq4', text: 'If there is an interruption, I can switch back to what I was doing very quickly.' },
    { id: 'aq5', text: 'I find it easy to \'read between the lines\' when someone is talking to me.' },
    { id: 'aq6', text: 'I know how to tell if someone listening to me is getting bored.' },
    { id: 'aq7', text: 'When I\'m reading a story I find it difficult to work out the characters\' intentions.' },
    { id: 'aq8', text: 'I like to collect information about categories of things.' },
    { id: 'aq9', text: 'I find it easy to work out what someone is thinking or feeling just by looking at their face.' },
    { id: 'aq10', text: 'I find it difficult to work out people\'s intentions.' }
  ];

  const responseOptions = [
    { value: 'definitely_agree', label: 'Definitely Agree' },
    { value: 'slightly_agree', label: 'Slightly Agree' },
    { value: 'slightly_disagree', label: 'Slightly Disagree' },
    { value: 'definitely_disagree', label: 'Definitely Disagree' }
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
      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
        <h3 className="font-semibold text-indigo-900 mb-2">Autism Spectrum Assessment (AQ-10)</h3>
        <p className="text-indigo-800 mb-3">
          This brief questionnaire helps us understand different cognitive patterns and preferences. 
          Please read each statement carefully and select the response that best describes you.
        </p>
        <div className="text-sm text-indigo-700">
          <strong>Note:</strong> This assessment is for understanding cognitive diversity and preferences, not for diagnostic purposes.
        </div>
      </div>

      {/* Reference Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
        <p className="text-blue-800 text-sm">
          <strong>Reference:</strong> Questions sourced from the official AQ-10 assessment. 
          <a href="https://docs.autismresearchcentre.com/tests/AQ10.pdf" className="text-blue-900 underline ml-1" target="_blank" rel="noopener noreferrer">
            View original document
          </a>
        </p>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {questions.map((question, index) => (
          <div key={question.id} className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="text-lg font-medium text-gray-900 leading-relaxed">
                  {question.text}
                </p>
              </div>
            </div>

            {/* Response Options */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {responseOptions.map((option) => (
                <label
                  key={option.value}
                  className={`
                    cursor-pointer transition-all duration-200 p-3 rounded-xl border-2 text-center
                    ${responses.find(r => r.questionId === question.id)?.answer === option.value
                      ? 'border-indigo-500 bg-indigo-500 text-white'
                      : 'border-gray-300 hover:border-indigo-400 hover:bg-indigo-50'
                    }
                  `}
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={option.value}
                    checked={responses.find(r => r.questionId === question.id)?.answer === option.value}
                    onChange={() => handleResponse(question.id, option.value)}
                    className="sr-only"
                  />
                  <div className="font-semibold text-sm">
                    {option.label}
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
            <h4 className="font-semibold text-gray-900">AQ-10 Progress</h4>
            <p className="text-gray-600">
              {responses.length} of {questions.length} questions completed
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-indigo-600">
              {Math.round((responses.length / questions.length) * 100)}%
            </div>
            <div className="text-sm text-gray-600">Complete</div>
          </div>
        </div>
        
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(responses.length / questions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default AQ10Section;
