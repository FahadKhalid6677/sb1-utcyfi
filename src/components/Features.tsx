import { Brain, Lock, Zap, MessageSquare, Settings, Clock } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Understanding',
    description: 'Natural language processing that understands context and nuance in conversations'
  },
  {
    icon: Lock,
    title: 'Privacy-First Design',
    description: 'End-to-end encryption and local processing to keep your messages secure'
  },
  {
    icon: Zap,
    title: 'Instant Responses',
    description: 'Lightning-fast automated replies that feel natural and contextual'
  },
  {
    icon: MessageSquare,
    title: 'Smart Threading',
    description: 'Maintains conversation context across multiple messages'
  },
  {
    icon: Settings,
    title: 'Custom Configuration',
    description: 'Personalize response styles and automation rules'
  },
  {
    icon: Clock,
    title: 'Schedule Responses',
    description: 'Set up delayed responses and automated follow-ups'
  }
];

export default function Features() {
  return (
    <div className="relative py-24 bg-black overflow-hidden">
      {/* Gradient Circle Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-900 to-indigo-900 blur-[100px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Powerful Features for Seamless Conversations
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience the next generation of messaging with our advanced AI-powered features
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative backdrop-blur-xl bg-gray-900/40 p-8 rounded-3xl shadow-lg border border-gray-800/50 hover:bg-gray-900/60 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent rounded-3xl" />
              <div className="relative">
                <feature.icon className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}