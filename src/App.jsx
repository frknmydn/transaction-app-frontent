import React, { useState } from 'react';
import DashboardCards from './components/DashboardCards';
import UploadCsv from './components/UploadCsv';
import MerchantAnalysis from './components/MerchantAnalysis';
import PatternDetection from './components/PatternDetection';

function App() {
  const [activeTab, setActiveTab] = useState('merchant-analysis');
  const [normalizedTransactions, setNormalizedTransactions] = useState([]);
  const [detectedPatterns, setDetectedPatterns] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b w-full">
        {/* justify-center ile ortalama, max-w-screen-2xl ile 1536px genişliğe kadar büyüme */}
        <div className="flex justify-center">
          <div className="w-full max-w-screen-2xl px-8 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Transaction Analyzer</h1>
            <UploadCsv 
              onSetNormalized={setNormalizedTransactions}
              onSetPatterns={setDetectedPatterns}
            />
          </div>
        </div>
      </header>

      {/* İçerik (main) */}
      <main className="flex-1 w-full flex justify-center">
        {/* Tekrar benzer şekilde ortalama ve max genişlik */}
        <div className="w-full max-w-screen-2xl px-8 py-6">
          <DashboardCards />

          {/* Sekmeler */}
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
