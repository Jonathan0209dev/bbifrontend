import React from 'react';

const AssessmentPreview: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-lg w-full transform perspective-1000 hover:-translate-y-2 transition-all duration-500 animate-slide-up">
      {/* Progress Header */}
      <div className="mb-6">
        <div className="flex gap-2 mb-3">
          {[0, 1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`h-1.5 rounded-full transition-all duration-300 w-10 ${
                step < 2 
                  ? 'animate-pulse' 
                  : step === 2 
                    ? 'animate-pulse' 
                    : ''
              }`}
              style={{
                backgroundColor: step < 2 || step === 2 ? '#180E4A' : '#E5E7EB'
              }}
            />
          ))}
        </div>
        <div className="text-gray-600 text-sm font-medium">Question 3 of 10</div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h3 
          className="font-montserrat font-semibold mb-6"
          style={{
            fontSize: '19.99px',
            lineHeight: '23.99px',
            letterSpacing: '-0.4px',
            color: '#0F172A'
          }}
        >
          When working on team projects, I prefer to:
        </h3>
        
        <div className="space-y-3">
          {[
            "Take a leadership role and guide the team",
            "Collaborate equally with all team members", 
            "Focus on my specific expertise and contribute accordingly",
            "Support others and help facilitate discussions"
          ].map((option, index) => (
            <label 
              key={index}
              className="flex items-center justify-between p-4 cursor-pointer transition-all duration-200 rounded-2xl"
              style={{
                width: '432.66px',
                height: '58.47px',
                borderWidth: '2px',
                borderColor: '#E2E8F0',
                borderStyle: 'solid'
              }}
            >
              <span 
                className="font-roboto-slab font-medium flex-1"
                style={{
                  fontSize: '15.99px',
                  lineHeight: '23.99px',
                  letterSpacing: '-0.16px',
                  color: '#334155'
                }}
              >
                {option}
              </span>
              <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 relative ml-3 ${
                index === 2 ? 'border-primary-blue bg-primary-blue' : 'border-gray-300'
              }`}>
                {index === 2 && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <button 
          className="font-roboto-slab font-semibold transition-all duration-200"
          style={{
            width: '85.85px',
            height: '36px',
            paddingTop: '10px',
            paddingRight: '17.68px',
            paddingBottom: '10px',
            paddingLeft: '17.34px',
            borderRadius: '16px',
            borderWidth: '2px',
            borderColor: '#3B82F6',
            borderStyle: 'solid',
            backgroundColor: 'transparent',
            fontSize: '11.99px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#3B82F6',
            opacity: 1
          }}
        >
          Previous
        </button>
        <button 
          className="font-roboto-slab font-semibold transition-all duration-200"
          style={{
            width: '114.75px',
            height: '32px',
            paddingTop: '8px',
            paddingRight: '16.61px',
            paddingBottom: '8px',
            paddingLeft: '16.41px',
            borderRadius: '16px',
            backgroundColor: '#001847',
            border: 'none',
            fontSize: '11.99px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            opacity: 1
          }}
        >
          <span
            style={{
              background: 'linear-gradient(120.69deg, #A4B4CF 36.16%, #F3F3F4 70.07%, #A4B3CE 99.7%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Next Question
          </span>
        </button>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center pt-20 pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in">
            {/* Logo */}
            <div className="mt-8">
              <img 
                src="/logo.png" 
                alt="BBI Intelligence Logo" 
                className="w-2/6 h-auto"
                style={{
                  opacity: 1
                }}
              />
            </div>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-xl">🧠</span>
              <span className="text-white/90 text-sm font-medium">Behavioral & Business Insights</span>
            </div>

            {/* Main Heading */}
            <h1 
              className="font-montserrat font-bold mb-6"
              style={{
                fontSize: '60px',
                lineHeight: '60.4px',
                letterSpacing: '-1.6px',
                color: '#EDBDD2'
              }}
            >
              Understand Your Communication & Work Style
            </h1>

            {/* Subtitle */}
            <p 
              className="font-roboto-slab font-normal mb-8 max-w-2xl"
              style={{
                fontSize: '20px',
                lineHeight: '32px',
                letterSpacing: '-0.16px',
                color: '#FFFFFFD9'
              }}
            >
              Discover insights about how you communicate and work most effectively. Gain self-awareness and learn how to collaborate better with others through our comprehensive behavioral assessment.
            </p>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              {[
                { icon: '⚡', text: '10-minute assessment' },
                { icon: '📊', text: 'Detailed insights' },
                { icon: '🤝', text: 'Team collaboration' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-xl">{feature.icon}</span>
                  <span 
                    className="font-roboto-slab font-medium"
                    style={{
                      fontSize: '14px',
                      lineHeight: '22.4px',
                      letterSpacing: '-0.16px',
                      color: '#FFFFFFE5'
                    }}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="/onboarding"
                className="inline-flex items-center justify-center font-roboto-slab font-semibold transition-all hover:shadow-lg group"
                style={{
                  width: '266px',
                  height: '57px',
                  paddingTop: '18px',
                  paddingRight: '32px',
                  paddingBottom: '18px',
                  paddingLeft: '32px',
                  gap: '8px',
                  borderRadius: '16px',
                  backgroundColor: '#EDBDD2',
                  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.06), 0px 4px 6px 0px rgba(0, 0, 0, 0.07)',
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#021C45',
                  opacity: 1
                }}
              >
                <span>Start Your Assessment</span>
                <span className="text-xl font-bold group-hover:translate-x-1 transition-transform">▶</span>
              </a>
              <button 
                className="relative inline-flex items-center justify-center font-roboto-slab font-semibold transition-all hover:shadow-lg"
                style={{
                  width: '157px',
                  height: '57px',
                  paddingTop: '18px',
                  paddingRight: '34px',
                  paddingBottom: '18px',
                  paddingLeft: '34px',
                  borderRadius: '16px',
                  background: 'transparent',
                  border: '2px solid #B4C3DE',
                  // backgroundImage: 'linear-gradient(transparent, transparent), linear-gradient(120.69deg, #B4C3DE 36.16%, #F3F3F4 70.07%, #B4C3DE 99.7%)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'content-box, border-box',
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  opacity: 1
                }}
              >
                  Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 text-center">
              {[
                { number: '50K+', label: 'Assessments Completed' },
                { number: '1,200+', label: 'Organizations' },
                { number: '98%', label: 'Accuracy Rate' }
              ].map((stat, index) => (
                <div key={index}>
                  <div 
                    className="font-montserrat font-extrabold mb-1"
                    style={{
                      fontSize: '40px',
                      lineHeight: '40px',
                      letterSpacing: '-0.16px',
                      textAlign: 'center',
                      color: '#EDBDD2'
                    }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    className="font-roboto-slab font-medium"
                    style={{
                      fontSize: '14px',
                      lineHeight: '22.4px',
                      letterSpacing: '-0.16px',
                      textAlign: 'center',
                      color: '#FFFFFFB2'
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Assessment Preview */}
          <div className="flex justify-center lg:justify-end">
            <AssessmentPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 