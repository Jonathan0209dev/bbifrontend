import React, { useState, useEffect } from 'react';

interface CSISectionProps {
  data: { [key: string]: number };
  onUpdate: (data: { [key: string]: number }) => void;
}

const CSISection: React.FC<CSISectionProps> = ({ data, onUpdate }) => {
  const [responses, setResponses] = useState<{ [key: string]: number }>(data || {});

  // CSI questions organized by dimension as specified
  const questions = [
    // Structuredness
    { id: 'struct1', text: 'When I tell a story, the different parts are always clearly related to each other.', dimension: 'structuredness' },
    { id: 'struct2', text: 'I sometimes find it hard to tell a story in an organized way.', dimension: 'structuredness', reverse: true },
    { id: 'struct3', text: 'I always express a clear chain of thoughts when I argue a point.', dimension: 'structuredness' },
    { id: 'struct4', text: 'My stories always contain a logical structure.', dimension: 'structuredness' },
    
    // Thoughtfulness
    { id: 'thought1', text: 'I think carefully before I say something.', dimension: 'thoughtfulness' },
    { id: 'thought2', text: 'I weigh my answers carefully.', dimension: 'thoughtfulness' },
    { id: 'thought3', text: 'The statements I make are not always well thought out.', dimension: 'thoughtfulness', reverse: true },
    { id: 'thought4', text: 'I choose my words with care.', dimension: 'thoughtfulness' },
    
    // Substantiveness
    { id: 'subst1', text: 'Conversations with me always involve some important topic.', dimension: 'substantiveness' },
    { id: 'subst2', text: 'You won\'t hear me jabbering about superficial or shallow matters.', dimension: 'substantiveness' },
    { id: 'subst3', text: 'I am someone who can often talk about trivial things.', dimension: 'substantiveness', reverse: true },
    { id: 'subst4', text: 'I rarely, if ever, just chatter away about something.', dimension: 'substantiveness' },
    
    // Conciseness
    { id: 'concise1', text: 'I don\'t need a lot of words to get my message across.', dimension: 'conciseness' },
    { id: 'concise2', text: 'Most of the time, I only need a few words to explain something.', dimension: 'conciseness' },
    { id: 'concise3', text: 'I am somewhat long-winded when I need to explain something.', dimension: 'conciseness', reverse: true },
    { id: 'concise4', text: 'With a few words, I can usually clarify my point to everybody.', dimension: 'conciseness' }
  ];

  const scaleLabels = [
    { value: 1, label: 'Strongly Disagree' },
    { value: 2, label: 'Disagree' },
    { value: 3, label: 'Neutral' },
    { value: 4, label: 'Agree' },
    { value: 5, label: 'Strongly Agree' }
  ];

  const dimensionInfo = {
    structuredness: {
      title: 'Structuredness',
      description: 'How organized and logical your communication is',
      icon: '🏗️'
    },
    thoughtfulness: {
      title: 'Thoughtfulness',
      description: 'How carefully you consider your words before speaking',
      icon: '🤔'
    },
    substantiveness: {
      title: 'Substantiveness',
      description: 'Your preference for meaningful vs. casual conversation',
      icon: '💭'
    },
    conciseness: {
      title: 'Conciseness',
      description: 'How efficiently you express your ideas',
      icon: '🎯'
    }
  };

  const handleResponse = (questionId: string, value: number) => {
    const newResponses = { ...responses, [questionId]: value };
    setResponses(newResponses);
    onUpdate(newResponses);
  };

  useEffect(() => {
    setResponses(data || {});
  }, [data]);

  // Group questions by dimension for better organization
  const groupedQuestions = questions.reduce((acc, question) => {
    if (!acc[question.dimension]) {
      acc[question.dimension] = [];
    }
    acc[question.dimension].push(question);
    return acc;
  }, {} as { [key: string]: typeof questions });

  return (
    <div className="space-y-8">
      {/* Instructions */}
      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
        <h3 className="font-semibold text-purple-900 mb-2">Communication Style Assessment</h3>
        <p className="text-purple-800 mb-3">
          Please indicate to what extent you agree with the following statements about your communication style:
        </p>
        <div className="grid grid-cols-5 gap-2 text-sm">
          {scaleLabels.map((label) => (
            <div key={label.value} className="text-center">
              <div className="font-semibold text-purple-900">{label.value}</div>
              <div className="text-purple-700">{label.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Questions grouped by dimension */}
      {Object.entries(groupedQuestions).map(([dimension, dimensionQuestions]) => (
        <div key={dimension} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          {/* Dimension Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
            <div className="flex items-center">
              <span className="text-2xl mr-3">{dimensionInfo[dimension as keyof typeof dimensionInfo].icon}</span>
              <div>
                <h4 className="font-semibold text-lg">
                  {dimensionInfo[dimension as keyof typeof dimensionInfo].title}
                </h4>
                <p className="text-white/90 text-sm">
                  {dimensionInfo[dimension as keyof typeof dimensionInfo].description}
                </p>
              </div>
            </div>
          </div>

          {/* Questions in this dimension */}
          <div className="p-6 space-y-6">
            {dimensionQuestions.map((question, index) => (
              <div key={question.id} className="border border-gray-100 rounded-xl p-4">
                {/* Question Text */}
                <div className="mb-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-gray-900 font-medium leading-relaxed">
                      {question.text}
                      {question.reverse && (
                        <span className="ml-2 text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                          Reverse scored
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Response Scale */}
                <div className="grid grid-cols-5 gap-2">
                  {scaleLabels.map((scale) => (
                    <label
                      key={scale.value}
                      className={`
                        cursor-pointer transition-all duration-200 p-2 rounded-lg border text-center text-sm
                        ${responses[question.id] === scale.value
                          ? 'border-purple-500 bg-purple-500 text-white'
                          : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50'
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
                      <div className="font-semibold mb-1">
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
        </div>
      ))}

      {/* Progress Summary */}
      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-gray-900">Communication Style Progress</h4>
            <p className="text-gray-600">
              {Object.keys(responses).length} of {questions.length} questions completed
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-purple-600">
              {Math.round((Object.keys(responses).length / questions.length) * 100)}%
            </div>
            <div className="text-sm text-gray-600">Complete</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(Object.keys(responses).length / questions.length) * 100}%` }}
          />
        </div>

        {/* Dimension Progress */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {Object.entries(groupedQuestions).map(([dimension, dimensionQuestions]) => {
            const completed = dimensionQuestions.filter(q => responses[q.id]).length;
            const total = dimensionQuestions.length;
            return (
              <div key={dimension} className="text-center">
                <div className="text-sm font-medium text-gray-700">
                  {dimensionInfo[dimension as keyof typeof dimensionInfo].icon} {dimensionInfo[dimension as keyof typeof dimensionInfo].title}
                </div>
                <div className="text-xs text-gray-600">
                  {completed}/{total}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CSISection;
