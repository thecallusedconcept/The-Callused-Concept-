import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Calendar, Clock, Users, Star } from 'lucide-react';

export default function CallousedConcept() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    situation: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const testimonials = [
    {
      quote: "I hit rock bottom after my divorce. I knew what I was capable of, but had no idea how to get back there. In 6 months of coaching, I rebuilt my fitness, my confidence, and my entire life. I'm unstoppable again.",
      author: "Mark D.",
      role: "Former Athlete, 6-Month Rebuild"
    },
    {
      quote: "Burned out from 10 years in corporate. I had lost myself completely. The structured approach and weekly accountability changed everything. I went from barely functional to thriving in every area of my life.",
      author: "Sarah M.",
      role: "Executive, 12-Month Mastery"
    },
    {
      quote: "Best investment I've made. Not just in fitness—in myself. The mindset work was as important as the physical transformation. I finally have the discipline and structure I lost years ago.",
      author: "James T.",
      role: "Entrepreneur, 3-Month Foundation"
    }
  ];

  const situations = [
    'Career burnout or setback',
    'Recent major life change',
    'Lost fitness/health',
    'Business challenges',
    'Relationship transition',
    'Loss of identity/direction',
    'Post-athletic life',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-blue-500/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              <span className="text-blue-400">THE</span> CALLUSED CONCEPT
            </h1>
            <p className="text-xs text-slate-500 mt-1 font-semibold tracking-wide">REBUILD YOUR FOUNDATION</p>
          </div>
          <button
            onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold transition-colors"
          >
            Book a Call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-32 md:py-40 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 font-bold text-sm tracking-wider uppercase mb-6">
            For Driven People Who Lost Their Edge
          </p>
          
          <h2 className="text-6xl md:text-7xl font-black leading-tight mb-8 tracking-tight">
            You <span className="text-blue-400">Built It Once.</span>
            <br />
            Build It <span className="text-blue-400">Again.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether it's a <strong>career setback</strong>, <strong>life transition</strong>, <strong>divorce</strong>, or the post-athlete blues—something knocked you off course. You're too driven to stay there. You just need the <strong>right structure, accountability, and strategy</strong> to reclaim what made you unstoppable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
            >
              Learn How It Works <ArrowRight size={20} />
            </button>
            <button
              onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-blue-600 text-blue-400 hover:bg-blue-500/10 rounded-lg font-bold text-lg transition-colors"
            >
              Schedule Discovery Call
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-6 border-t border-blue-500/20 pt-12 mt-12">
            <div>
              <p className="text-4xl font-black text-blue-400">1:1</p>
              <p className="text-slate-400 text-sm mt-2 font-semibold tracking-wide">PERSONALIZED COACHING</p>
            </div>
            <div>
              <p className="text-4xl font-black text-blue-400">100%</p>
              <p className="text-slate-400 text-sm mt-2 font-semibold tracking-wide">CUSTOM TO YOU</p>
            </div>
            <div>
              <p className="text-4xl font-black text-blue-400">Weekly</p>
              <p className="text-slate-400 text-sm mt-2 font-semibold tracking-wide">ACCOUNTABILITY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-6 md:px-12 py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-black mb-4 text-center tracking-tight">This Is For You If...</h3>
          <p className="text-center text-slate-400 mb-16 text-lg">You recognize yourself here:</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              'You were <strong className="text-slate-100">thriving professionally</strong> or physically—and something derailed you',
              'You know what you\'re capable of, but <strong className="text-slate-100">lost the structure</strong> to get there',
              'You\'re tired of feeling stuck between <strong className="text-slate-100">who you were and who you want to be</strong>',
              'You need someone who <strong className="text-slate-100">gets ambition</strong> and won\'t let you off the hook',
              'You\'ve <strong className="text-slate-100">tried going it alone</strong> and it\'s not working',
              'You\'re ready to rebuild, but you need a <strong className="text-slate-100">clear roadmap</strong>'
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={28} />
                <p 
                  className="text-slate-300 text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 md:px-12 py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-black mb-16 text-center tracking-tight">How Coaching Works</h3>
          
          <div className="space-y-12">
            {[
              {
                step: '1',
                title: 'Discovery Call',
                highlight: '(Free)',
                desc: 'We dig into what happened, where you want to go, and what\'s getting in the way. No pressure—just understanding.'
              },
              {
                step: '2',
                title: 'Custom Foundation Plan',
                desc: 'Based on your situation and lifestyle, we build your personalized roadmap: fitness, mindset, accountability structure.'
              },
              {
                step: '3',
                title: 'Weekly 1:1 Coaching Sessions',
                desc: '30-minute calls where we work on execution, troubleshoot obstacles, and keep you accountable to your vision.'
              },
              {
                step: '4',
                title: 'Rebuild & Compound Results',
                desc: 'Small consistent actions compound into massive transformation. You\'ll feel <strong className="text-blue-400">like yourself again</strong>—only stronger.'
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 md:gap-12">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500/20 border-2 border-blue-500 text-blue-400">
                    <span className="text-2xl font-black">{item.step}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-xl font-black mb-2 text-slate-100">
                    {item.title} {item.highlight && <span className="text-blue-400 font-bold">{item.highlight}</span>}
                  </h4>
                  <p 
                    className="text-slate-300 text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-12 py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-black mb-4 text-center tracking-tight">What My Clients Say</h3>
          <p className="text-center text-slate-400 mb-16 text-lg">Real transformations from people just like you</p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-slate-900 border border-blue-500/20 rounded-lg p-7 hover:border-blue-500/40 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-blue-400 text-blue-400" />
                  ))}
                </div>
                <p className="text-slate-200 mb-6 text-base leading-relaxed font-medium">
                  "{testimonial.quote}"
                </p>
                <p className="text-blue-400 font-bold text-sm">{testimonial.author}</p>
                <p className="text-slate-500 text-xs mt-1">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="px-6 md:px-12 py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-black mb-4 text-center tracking-tight">Choose Your Timeline</h3>
          <p className="text-center text-slate-400 mb-16 text-lg">Every plan is fully customized to your situation.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                duration: '3 Month Foundation',
                price: 'Custom Pricing',
                best: false,
                description: 'Build momentum and rebuild confidence',
                highlights: [
                  'Assessment & custom plan',
                  'Weekly 30-min calls',
                  'Accountability structure'
                ]
              },
              {
                duration: '6 Month Rebuild',
                price: 'Custom Pricing',
                best: true,
                description: 'Real transformation with momentum',
                highlights: [
                  'Deeper mindset work',
                  'Progressive fitness plan',
                  'Bi-weekly strategy sessions'
                ]
              },
              {
                duration: '12 Month Mastery',
                price: 'Custom Pricing',
                best: false,
                description: 'Complete reclamation and mastery',
                highlights: [
                  'Weekly deep-dive sessions',
                  'Advanced resilience training',
                  'Lifetime framework access'
                ]
              }
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-lg border p-7 transition-all ${
                  plan.best
                    ? 'border-blue-600 bg-slate-900 ring-2 ring-blue-500/20 md:scale-105 shadow-lg shadow-blue-500/10'
                    : 'border-blue-500/20 bg-slate-950 hover:border-blue-500/40'
                }`}
              >
                {plan.best && (
                  <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-xs font-black mb-4 tracking-wider">
                    MOST POPULAR
                  </div>
                )}
                
                <h4 className="text-xl font-black mb-2 text-slate-100">{plan.duration}</h4>
                <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
                <p className="text-blue-400 font-black text-lg mb-8">{plan.price}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.highlights.map((highlight, j) => (
                    <li key={j} className="flex gap-3 text-slate-300 text-sm font-medium">
                      <CheckCircle size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3 rounded-lg font-bold transition-colors ${
                    plan.best
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'border-2 border-blue-600 text-blue-400 hover:bg-blue-500/10'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="px-6 md:px-12 py-24 bg-slate-900">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-4xl font-black mb-4 text-center tracking-tight">
            Book Your <span className="text-blue-400">Discovery Call</span>
          </h3>
          <p className="text-center text-slate-400 mb-12 text-lg">
            Let's talk about where you are and how I can help rebuild your foundation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 bg-slate-950 p-8 rounded-lg border border-blue-500/20">
            <div>
              <label className="block text-xs font-black text-slate-300 mb-2 tracking-wider">
                YOUR NAME
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-blue-500/20 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 bg-slate-900 text-slate-100 placeholder-slate-600"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black text-slate-300 mb-2 tracking-wider">
                  EMAIL
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-blue-500/20 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 bg-slate-900 text-slate-100 placeholder-slate-600"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-300 mb-2 tracking-wider">
                  PHONE
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-blue-500/20 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 bg-slate-900 text-slate-100 placeholder-slate-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-300 mb-2 tracking-wider">
                WHAT'S YOUR SITUATION?
              </label>
              <select
                value={formData.situation}
                onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-blue-500/20 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 bg-slate-900 text-slate-100"
                required
              >
                <option value="">Select what resonates...</option>
                {situations.map((sit, i) => (
                  <option key={i} value={sit}>{sit}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-300 mb-2 tracking-wider">
                TELL ME MORE ABOUT YOUR GOALS
              </label>
              <textarea
                placeholder="Be honest. What's holding you back?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-blue-500/20 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 bg-slate-900 text-slate-100 placeholder-slate-600 h-28 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-600 text-white rounded-lg font-black text-lg hover:bg-blue-500 transition-colors tracking-wide"
            >
              {submitted ? '✓ REQUEST SENT! I\'LL BE IN TOUCH WITHIN 24 HOURS.' : 'SCHEDULE MY FREE DISCOVERY CALL'}
            </button>

            <p className="text-slate-500 text-xs text-center">
              No credit card required. Just a genuine conversation.
            </p>
          </form>

          {/* Post-form info */}
          <div className="grid md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-blue-500/20">
            <div className="text-center">
              <Clock className="mx-auto mb-4 text-blue-400" size={32} />
              <p className="font-bold text-slate-100 mb-2">30 Minutes</p>
              <p className="text-slate-400 text-sm">Focused discovery conversation</p>
            </div>
            <div className="text-center">
              <Calendar className="mx-auto mb-4 text-blue-400" size={32} />
              <p className="font-bold text-slate-100 mb-2">Your Schedule</p>
              <p className="text-slate-400 text-sm">Pick a time that works for you</p>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-4 text-blue-400" size={32} />
              <p className="font-bold text-slate-100 mb-2">No Pressure</p>
              <p className="text-slate-400 text-sm">Just seeing if we're a good fit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-blue-500/20 bg-slate-950 text-center text-slate-500 text-sm">
        <p>© 2024 The Callused Concept. Rebuild Your Foundation.</p>
      </footer>
    </div>
  );
}