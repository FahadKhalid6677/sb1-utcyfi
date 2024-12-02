import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <div className="relative py-24 bg-black overflow-hidden">
      {/* Animated Gradient Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-900 to-purple-900 blur-[100px] animate-gradient-shift-reverse" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-300">
            Discover how iMessageAI is helping professionals streamline their communications
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative backdrop-blur-xl bg-gray-900/40 p-8 rounded-3xl shadow-lg border border-gray-800/50 hover:bg-gray-900/60 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 to-transparent rounded-3xl" />
              <div className="relative">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}