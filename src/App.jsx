import React, { useState } from 'react';
import DashboardCards from './components/DashboardCards';
import UploadCsv from './components/UploadCsv';
import MerchantAnalysis from './components/MerchantAnalysis';
import PatternDetection from './components/PatternDetection';

function App() {
  const [activeTab, setActiveTab] = useState('merchant-analysis');
  const [normalizedTransactions, setNormalizedTransactions] = useState([]);
  const [detectedPatterns, setDetectedPatterns] = useState([]);

  // NEW: Add a "summary" state so we can display stats from the backend
  const [summary, setSummary] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b w-full">
        <div className="flex justify-center">
          <div className="w-full max-w-screen-2xl px-8 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Transaction Analyzer</h1>

            {/* Pass down a setter for normalized, patterns, AND summary */}
            <UploadCsv
              onSetNormalized={setNormalizedTransactions}
              onSetPatterns={setDetectedPatterns}
              onSetSummary={setSummary}
            />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full flex justify-center">
        <div className="w-full max-w-screen-2xl px-8 py-6">

          {/* NEW: Pass summary to DashboardCards */}
          <DashboardCards summary={summary} />

          {/* Tab buttons */}
          <div className="border-b mb-2 flex space-x-4 mt-6">
            <button
              onClick={() => setActiveTab('merchant-analysis')}
              className={`pb-2 px-2 border-b-2 ${
                activeTab === 'merchant-analysis'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent'
              }`}
            >
              Merchant Analysis
            </button>
            <button
              onClick={() => setActiveTab('pattern-detection')}
              className={`pb-2 px-2 border-b-2 ${
                activeTab === 'pattern-detection'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent'
              }`}
            >
              Pattern Detection
            </button>
          </div>

          {/* Conditional rendering based on activeTab */}
          {activeTab === 'merchant-analysis' && (
            <MerchantAnalysis transactions={normalizedTransactions} />
          )}
          {activeTab === 'pattern-detection' && (
            <PatternDetection patterns={detectedPatterns} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
