import React, { useState } from 'react';
import { User, Mail, Building, Lock, ArrowRight } from 'lucide-react';

interface PersonalInfoProps {
  data: {
    firstName: string;
    lastName: string;
    role: string;
    password: string;
    email: string;
    organization: string;
  };
  onUpdate: (data: Partial<PersonalInfoProps['data']>) => void;
  onNext: () => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ data, onUpdate, onNext }) => {
  const [formData, setFormData] = useState(data);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    onUpdate({ [field]: value });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.role.trim()) newErrors.role = 'Role/job title is required';
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="bg-white rounded-3xl p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <User className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 font-display">
            Welcome to BBI Intelligence
          </h1>
          <p className="text-gray-600 text-lg">
            Let's start by getting to know you better
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Role / Job Title *
            </label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => handleInputChange('role', e.target.value)}
              className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all ${
                errors.role ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g. Software Engineer, Product Manager"
            />
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Create Password *
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-2xl focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Minimum 8 characters"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Pre-filled Information */}
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
              <Mail className="mr-2" size={20} />
              Information from Invitation
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email Address
                </label>
                <div className="text-gray-900 font-medium">
                  {formData.email || 'user@company.com'}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Organization
                </label>
                <div className="text-gray-900 font-medium flex items-center">
                  <Building className="mr-2" size={16} />
                  {formData.organization || 'Your Company'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="mt-8">
          <button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-primary-blue to-secondary-emerald text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center group"
          >
            <span>Continue to Assessment</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
