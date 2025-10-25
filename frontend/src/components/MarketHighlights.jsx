import React from 'react';
import { TrendingUp, PieChart, Globe, Zap, Brain, Shield } from 'lucide-react';

const MarketHighlights = () => {
  return (
    <div className="relative z-10 py-16 bg-gradient-to-b from-black via-black/95 to-black">
      {/* Market Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
          Market Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {marketStats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-2xl font-bold text-cyan-400">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
          Why Choose MarketLens
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-4 text-cyan-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Access Tools */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 border border-white/10">
          <h2 className="text-2xl font-bold text-center text-white mb-8">
            Quick Access Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button 
              onClick={() => window.location.href = '/newspage'}
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-white text-left flex items-center space-x-3"
            >
              <TrendingUp className="w-6 h-6 text-cyan-400" />
              <div>
                <h3 className="font-semibold">Market Analysis</h3>
                <p className="text-sm text-gray-400">Get real-time market insights</p>
              </div>
            </button>
            <button 
              onClick={() => window.location.href = '/linkpage'}
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-white text-left flex items-center space-x-3"
            >
              <PieChart className="w-6 h-6 text-cyan-400" />
              <div>
                <h3 className="font-semibold">Portfolio Tracker</h3>
                <p className="text-sm text-gray-400">Link and track your investments</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample market stats data
const marketStats = [
  {
    label: "Market Cap",
    value: "$2.8T",
    description: "Total market capitalization"
  },
  {
    label: "24h Volume",
    value: "$142B",
    description: "Total trading volume"
  },
  {
    label: "Active Markets",
    value: "328",
    description: "Markets currently trading"
  }
];

// Features data
const features = [
  {
    icon: <Globe className="w-full h-full" />,
    title: "Global Coverage",
    description: "Access market data and news from exchanges worldwide"
  },
  {
    icon: <Brain className="w-full h-full" />,
    title: "AI-Powered Insights",
    description: "Get intelligent analysis and predictions using advanced AI"
  },
  {
    icon: <Shield className="w-full h-full" />,
    title: "Secure & Private",
    description: "Your portfolio data is encrypted and protected"
  }
];

export default MarketHighlights;