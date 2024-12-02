import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    features: [
      'Basic AI responses',
      'Standard response time',
      'Basic customization',
      'Community support'
    ]
  },
  {
    name: 'Pro',
    price: '$9.99/mo',
    features: [
      'Advanced AI model',
      'Priority response time',
      'Custom response styles',
      'Priority support',
      'Multiple device sync',
      'Advanced automation'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Custom AI model training',
      'Dedicated support team',
      'API access',
      'Custom integration',
      'Advanced analytics',
      'SLA guarantee'
    ]
  }
];

export default function Pricing() {
  return (
    <div className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-300">
            Select the perfect plan for your messaging needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gray-900 rounded-3xl shadow-lg hover:bg-gray-850 transition-colors p-8">
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-indigo-400 mb-6">{plan.price}</div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-5 h-5 text-indigo-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-2xl hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}