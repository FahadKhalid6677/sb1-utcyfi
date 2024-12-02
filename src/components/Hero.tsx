import { Bot, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Bot className="w-8 h-8" />
              <span className="text-xl font-semibold">iMessageAI</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your iMessage Experience with AI-Powered Conversations
            </h1>
            <p className="text-lg mb-8 text-indigo-100">
              Automate your iMessage responses with natural language AI that understands context and maintains meaningful conversations.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-indigo-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-indigo-600 transition-colors">
                Download Now
              </button>
              <button className="border-2 border-indigo-400 px-8 py-3 rounded-2xl font-semibold hover:bg-indigo-800/50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="w-6 h-6" />
                <span className="font-medium">Live Chat Preview</span>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-900/50 rounded-2xl p-4 ml-auto max-w-[80%]">
                  <p>Hey! Can you help me schedule a meeting with the team?</p>
                </div>
                <div className="bg-gray-700/50 rounded-2xl p-4 max-w-[80%]">
                  <p>I'll help you schedule that meeting. What time works best for you?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}