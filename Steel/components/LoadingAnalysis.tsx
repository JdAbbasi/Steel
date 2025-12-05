import React, { useState, useEffect } from 'react';
import { Loader2, FileSearch, Shield, Search } from 'lucide-react';

const STEPS = [
  { text: "Reading reference document...", icon: FileSearch },
  { text: "Parsing HTS structure...", icon: Search },
  { text: "Checking Aluminum derivatives...", icon: Shield },
  { text: "Checking Steel derivatives...", icon: Shield },
  { text: "Verifying exemptions...", icon: FileSearch },
  { text: "Finalizing analysis...", icon: Loader2 }
];

const LoadingAnalysis: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Progress through steps, but don't finish too quickly
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < STEPS.length - 1 ? prev + 1 : prev));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = STEPS[currentStep].icon;

  return (
    <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-8 bg-white/50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800 animate-fade-in transition-colors">
      <div className="relative mb-8">
        {/* Pulsing background */}
        <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/30 rounded-full animate-ping opacity-30"></div>
        <div className="absolute inset-2 bg-indigo-50 dark:bg-indigo-900/10 rounded-full animate-pulse"></div>
        
        {/* Central Icon Container */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-full shadow-lg border border-indigo-100 dark:border-indigo-900 relative z-10 flex items-center justify-center transition-colors">
          <CurrentIcon className={`w-8 h-8 text-indigo-600 dark:text-indigo-400 ${currentStep === STEPS.length - 1 ? 'animate-spin' : 'animate-bounce'}`} />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Analyzing Compliance</h3>
      
      {/* Progress Bar */}
      <div className="w-64 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-5">
        <div 
          className="h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-700 ease-in-out"
          style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
        />
      </div>

      {/* Step Text */}
      <div className="h-6 overflow-hidden relative w-full text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium transition-all duration-300 animate-fade-in-up">
          {STEPS[currentStep].text}
        </p>
      </div>
    </div>
  );
};

export default LoadingAnalysis;