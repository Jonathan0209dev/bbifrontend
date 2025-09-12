import React, { useState, useEffect } from 'react';

interface HEXACOSectionProps {
  data: { [key: string]: number };
  onUpdate: (data: { [key: string]: number }) => void;
}

const HEXACOSection: React.FC<HEXACOSectionProps> = ({ data, onUpdate }) => {
  const [responses, setResponses] = useState<{ [key: string]: number }>(data || {});

  // HEXACO questions as specified
  const questions = [
    { id: 'q1', text: 'I can look at a painting for a long time.', dimension: 'openness', facet: 'aesthetic' },
    { id: 'q2', text: 'I make sure that things are in the right spot.', dimension: 'conscientiousness', facet: 'organization' },
    { id: 'q3', text: 'I remain unfriendly to someone who was mean to me.', dimension: 'agreeableness', facet: 'forgiveness', reverse: true },
    { id: 'q4', text: 'Nobody likes talking with me.', dimension: 'extraversion', facet: 'social_self_esteem', reverse: true },
    { id: 'q5', text: 'I am afraid of feeling pain.', dimension: 'emotionality', facet: 'fearfulness' },
    { id: 'q6', text: 'I find it difficult to lie.', dimension: 'honesty_humility', facet: 'sincerity' },
    { id: 'q7', text: 'I think science is boring.', dimension: 'openness', facet: 'inquisitiveness', reverse: true },
    { id: 'q8', text: 'I postpone complicated tasks as long as possible.', dimension: 'conscientiousness', facet: 'diligence', reverse: true },
    { id: 'q9', text: 'I often express criticism.', dimension: 'agreeableness', facet: 'gentleness', reverse: true },
    { id: 'q10', text: 'I easily approach strangers.', dimension: 'extraversion', facet: 'social_boldness' },
    { id: 'q11', text: 'I worry less than others.', dimension: 'emotionality', facet: 'anxiety', reverse: true },
    { id: 'q12', text: 'I would like to know how to make lots of money in a dishonest manner.', dimension: 'honesty_humility', facet: 'fairness', reverse: true },
    { id: 'q13', text: 'I have a lot of imagination.', dimension: 'openness', facet: 'creativity' },
    { id: 'q14', text: 'I work very precisely.', dimension: 'conscientiousness', facet: 'perfectionism' },
    { id: 'q15', text: 'I tend to quickly agree with others.', dimension: 'agreeableness', facet: 'flexibility' },
    { id: 'q16', text: 'I like to talk with others.', dimension: 'extraversion', facet: 'sociability' },
    { id: 'q17', text: 'I can easily overcome difficulties on my own.', dimension: 'emotionality', facet: 'dependence', reverse: true },
    { id: 'q18', text: 'I want to be famous.', dimension: 'honesty_humility', facet: 'greed_avoidance', reverse: true },
    { id: 'q19', text: 'I like people with strange ideas.', dimension: 'openness', facet: 'unconventionality' },
    { id: 'q20', text: 'I often do things without really thinking.', dimension: 'conscientiousness', facet: 'prudence', reverse: true },
    { id: 'q21', text: 'Even when I\'m treated badly, I remain calm.', dimension: 'agreeableness', facet: 'patience' },
    { id: 'q22', text: 'I am seldom cheerful.', dimension: 'extraversion', facet: 'liveliness', reverse: true },
    { id: 'q23', text: 'I have to cry during sad or romantic movies.', dimension: 'emotionality', facet: 'sentimentality' },
    { id: 'q24', text: 'I am entitled to special treatment.', dimension: 'honesty_humility', facet: 'modesty', reverse: true }
  ];

  const scaleLabels = [
    { value: 1, label: 'Strongly Disagree' },
    { value: 2, label: 'Disagree' },
    { value: 3, label: 'Neutral' },
    { value: 4, label: 'Agree' },
    { value: 5, label: 'Strongly Agree' }
  ];

  const handleResponse = (questionId: string, value: number) => {
    const newResponses = { ...responses, [questionId]: value };
    setResponses(newResponses);
    onUpdate(newResponses);
  };

  useEffect(() => {
    setResponses(data || {});
  }, [data]);

  return (
    <div className="space-y-8">
      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h3 className="font-semibold text-blue-900 mb-2">Instructions</h3>
        <p className="text-blue-800">
          Please indicate to what extent you agree with the following statements using the scale below:
        </p>
        <div className="mt-3 grid grid-cols-5 gap-2 text-sm">
          {scaleLabels.map((label) => (
            <div key={label.value} className="text-center">
              <div className="font-semibold text-blue-900">{label.value}</div>
              <div className="text-blue-700">{label.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {questions.map((question, index) => (
          <div key={question.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
            {/* Question Number and Text */}
            <div className="mb-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-lg font-medium text-gray-900 leading-relaxed">
                    {question.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Response Scale */}
            <div className="grid grid-cols-5 gap-3">
              {scaleLabels.map((scale) => (
                <label
                  key={scale.value}
                  className={`
                    cursor-pointer transition-all duration-200 p-3 rounded-xl border-2 text-center
                    ${responses[question.id] === scale.value
                      ? 'border-primary-blue bg-primary-blue text-white'
                      : 'border-gray-300 hover:border-primary-blue hover:bg-blue-50'
                    }
                  `}
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={scale.value}
                    checked={responses[question.id] === scale.value}
                    onChange={() => handleResponse(question.id, scale.value)}
                    className="sr-only"
                  />
                  <div className="font-semibold text-sm mb-1">
                    {scale.value}
                  </div>
                  <div className="text-xs leading-tight">
                    {scale.label}
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
            <h4 className="font-semibold text-gray-900">Progress</h4>
            <p className="text-gray-600">
              {Object.keys(responses).length} of {questions.length} questions completed
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary-blue">
              {Math.round((Object.keys(responses).length / questions.length) * 100)}%
            </div>
            <div className="text-sm text-gray-600">Complete</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary-blue to-secondary-emerald h-2 rounded-full transition-all duration-500"
            style={{ width: `${(Object.keys(responses).length / questions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default HEXACOSection;
