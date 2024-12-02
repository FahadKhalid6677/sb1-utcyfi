import { Download, Settings2, MessageSquare, Check } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Download the App',
    description: 'Get started by downloading iMessageAI from the Mac App Store'
  },
  {
    icon: Settings2,
    title: 'Quick Setup',
    description: 'Follow our simple setup wizard to configure your preferences'
  },
  {
    icon: MessageSquare,
    title: 'Enable Integration',
    description: 'Grant permissions to integrate with iMessage'
  },
  {
    icon: Check,
    title: 'Start Chatting',
    description: 'Experience AI-powered conversations immediately'
  }
];

export default function Installation() {
  return (
    <div className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Easy Installation
          </h2>
          <p className="text-lg text-gray-300">
            Get up and running in minutes with our simple setup process
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto bg-indigo-900/50 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}