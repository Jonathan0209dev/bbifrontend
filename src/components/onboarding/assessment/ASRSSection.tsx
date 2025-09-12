import React, { useState, useEffect } from 'react';

interface ASRSSectionProps {
  data: any[];
  onUpdate: (data: any[]) => void;
}

const ASRSSection: React.FC<ASRSSectionProps> = ({ data, onUpdate }) => {
  const [responses, setResponses] = useState<any[]>(data || []);

  // Placeholder ASRS questions - actual questions would need to be obtained from the official ASRS-v1.1
  const questions = [
    { id: 'asrs1', text: 'How often do you have trouble wrapping up the fine details of a project, once the challenging parts have been done?', category: 'Inattention' },
    { id: 'asrs2', text: 'How often do you have difficulty getting things in order when you have to do a task that requires organization?', category: 'Inattention' },
    { id: 'asrs3', text: 'How often do you have problems remembering appointments or obligations?', category: 'Inattention' },
    { id: 'asrs4', text: 'When you have a task that requires a lot of thought, how often do you avoid or delay getting started?', category: 'Inattention' },
    { id: 'asrs5', text: 'How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?', category: 'Hyperactivity' },
    { id: 'asrs6', text: 'How often do you feel overly active and compelled to do things, like you were driven by a motor?', category: 'Hyperactivity' },
    { id: 'asrs7', text: 'How often do you make careless mistakes when you have to work on a boring or difficult project?', category: 'Inattention' },
    { id: 'asrs8', text: 'How often do you have difficulty keeping your attention when you are doing boring or repetitive work?', category: 'Inattention' },
    { id: 'asrs9', text: 'How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?', category: 'Inattention' },
    { id: 'asrs10', text: 'How often do you misplace or have difficulty finding things at home or at work?', category: 'Inattention' },
    { id: 'asrs11', text: 'How often are you distracted by activity or noise around you?', category: 'Inattention' },
    { id: 'asrs12', text: 'How often do you leave your seat in meetings or other situations where you are expected to remain seated?', category: 'Hyperactivity' },
    { id: 'asrs13', text: 'How often do you feel restless or fidgety?', category: 'Hyperactivity' },
    { id: 'asrs14', text: 'How often do you have difficulty unwinding and relaxing when you have time to yourself?', category: 'Hyperactivity' },
    { id: 'asrs15', text: 'How often do you find yourself talking too much when you are in social situations?', category: 'Hyperactivity' },
    { id: 'asrs16', text: 'When you\'re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?', category: 'Hyperactivity' },
    { id: 'asrs17', text: 'How often do you have difficulty waiting your turn in situations when turn taking is required?', category: 'Hyperactivity' },
    { id: 'asrs18', text: 'How often do you interrupt others when they are busy?', category: 'Hyperactivity' }
  ];

  const responseOptions = [
    { value: 'never', label: 'Never' },
    { value: 'rarely', label: 'Rarely' },
    { value: 'sometimes', label: 'Sometimes' },
    { value: 'often', label: 'Often' },
    { value: 'very_often', label: 'Very Often' }
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

  // Group questions by category
  const inattentionQuestions = questions.filter(q => q.category === 'Inattention');
  const hyperactivityQuestions = questions.filter(q => q.category === 'Hyperactivity');

  return (
    <div className="space-y-8">
      {/* Instructions */}
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
        <h3 className="font-semibold text-orange-900 mb-2">Adult ADHD Self-Report Scale (ASRS-v1.1)</h3>
        <p className="text-orange-800 mb-3">
          This questionnaire assesses attention and focus patterns. Please think about how you have felt and conducted yourself over the past 6 months.
        </p>
        <div className="text-sm text-orange-700">
          <strong>Note:</strong> This assessment is for understanding work and attention patterns, not for diagnostic purposes.
        </div>
      </div>

      {/* Access Notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
        <h4 className="font-semibold text-yellow-900 mb-2">⏳ Awaiting Access</h4>
        <p className="text-yellow-800">
          The official ASRS-v1.1 questions are being requested for integration. 
          Placeholder questions based on typical ADHD assessment patterns are shown below for demonstration.
        </p>
      </div>

      {/* Inattention Questions */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4">
          <h4 className="font-semibold text-lg flex items-center">
            <span className="text-2xl mr-3">🎯</span>
            Attention & Focus
          </h4>
          <p className="text-white/90 text-sm">Questions about concentration and attention patterns</p>
        </div>
        
        <div className="p-6 space-y-6">
          {inattentionQuestions.map((question, index) => (
            <div key={question.id} className="border border-gray-100 rounded-xl p-4">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                  {index + 1}
                </div>
                <p className="text-gray-900 font-medium leading-relaxed">
                  {question.text}
                </p>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {responseOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`
                      cursor-pointer transition-all duration-200 p-2 rounded-lg border text-center text-sm
                      ${responses.find(r => r.questionId === question.id)?.answer === option.value
                        ? 'border-blue-500 bg-blue-500 text-white'
                        : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
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
                    <div className="font-semibold mb-1">{option.label}</div>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hyperactivity Questions */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4">
          <h4 className="font-semibold text-lg flex items-center">
            <span className="text-2xl mr-3">⚡</span>
            Activity & Impulse Control
          </h4>
          <p className="text-white/90 text-sm">Questions about activity level and impulse patterns</p>
        </div>
        
        <div className="p-6 space-y-6">
          {hyperactivityQuestions.map((question, index) => (
            <div key={question.id} className="border border-gray-100 rounded-xl p-4">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                  {index + 1}
                </div>
                <p className="text-gray-900 font-medium leading-relaxed">
                  {question.text}
                </p>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {responseOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`
                      cursor-pointer transition-all duration-200 p-2 rounded-lg border text-center text-sm
                      ${responses.find(r => r.questionId === question.id)?.answer === option.value
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
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
                    <div className="font-semibold mb-1">{option.label}</div>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Summary */}
      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-gray-900">ASRS Progress</h4>
            <p className="text-gray-600">
              {responses.length} of {questions.length} questions completed
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-orange-600">
              {Math.round((responses.length / questions.length) * 100)}%
            </div>
            <div className="text-sm text-gray-600">Complete</div>
          </div>
        </div>
        
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(responses.length / questions.length) * 100}%` }}
          />
        </div>

        {/* Category Progress */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-sm font-medium text-gray-700">🎯 Attention & Focus</div>
            <div className="text-xs text-gray-600">
              {responses.filter(r => inattentionQuestions.find(q => q.id === r.questionId)).length}/{inattentionQuestions.length}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-700">⚡ Activity & Impulse</div>
            <div className="text-xs text-gray-600">
              {responses.filter(r => hyperactivityQuestions.find(q => q.id === r.questionId)).length}/{hyperactivityQuestions.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ASRSSection;
