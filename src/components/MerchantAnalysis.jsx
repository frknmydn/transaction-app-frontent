// src/components/MerchantAnalysis.jsx
import React from 'react';
import MerchantRow from './MerchantRow';

function MerchantAnalysis({ transactions }) {
  // transactions içinde: [ { original, normalized: { merchant, ... } }, ... ]
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Normalized Merchants</h2>
      {transactions.length === 0 ? (
        <p className="text-gray-500">
          No merchant data yet. Try uploading a CSV.
        </p>
      ) : (
        <div className="space-y-4">
          {transactions.map((txn, index) => (
            <MerchantRow key={index} transaction={txn} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MerchantAnalysis;
