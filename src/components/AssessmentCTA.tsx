import React from 'react';
import { ArrowRight, Clock, BarChart3, Shield } from 'lucide-react';

const AssessmentCTA: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2 text-white">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 font-display">
              Ready to Discover Your Style?
            </h2>
            <p className="text-xl text-white/85 mb-6 leading-relaxed max-w-3xl">
              Complete our 10-question assessment to receive personalized insights about your communication and work preferences.
            </p>
            
            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6 mb-2">
              {[
                { icon: <Clock size={20} />, text: 'Takes 10 minutes' },
                { icon: <BarChart3 size={20} />, text: 'Detailed report' },
                { icon: <Shield size={20} />, text: 'Privacy protected' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90 font-medium">
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <a href="/onboarding" className="btn btn-primary btn-xl group w-full lg:w-auto">
              <span>Start Your Assessment</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="text-white/70 text-sm font-medium text-center lg:text-right">
              Free assessment • No registration required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentCTA; 