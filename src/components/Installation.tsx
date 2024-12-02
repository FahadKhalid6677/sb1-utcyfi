export default function Installation() {
  return (
    <div className="relative py-24 bg-black overflow-hidden">
      {/* Animated Gradient Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-900 to-purple-900 blur-[100px] animate-gradient-shift" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Quick and Easy Installation
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get started in minutes with our simple installation process
          </p>
        </div>
        
        <div className="relative backdrop-blur-xl bg-gray-900/40 p-8 rounded-3xl shadow-lg border border-gray-800/50 max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent rounded-3xl" />
          <div className="relative space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">#</span>
              <code className="text-gray-300">npm install @acme/messaging-ai</code>
            </div>
            
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`import { MessagingAI } from '@acme/messaging-ai';

const ai = new MessagingAI({
  apiKey: 'your-api-key',
  model: 'advanced-v2'
});

// Start processing messages
ai.start();`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}