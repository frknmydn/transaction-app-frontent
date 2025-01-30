// src/components/DashboardCards.jsx
import React from 'react';

function DashboardCards() {
  // Statik veya backend'den gelen verilerle hesaplanabilir
  const totalSpend = 0; 
  const transactionCount = 0;
  const avgTransaction = 0;
  const merchantCount = 0;

  const cards = [
    { label: 'Total Spend', value: `$${totalSpend}` },
    { label: 'Transactions', value: transactionCount },
    { label: 'Avg. Transaction', value: `$${avgTransaction}` },
    { label: 'Merchants', value: merchantCount },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((card, idx) => (
        <div 
          key={idx} 
          className="bg-white rounded-md p-4 shadow-sm flex flex-col items-center"
        >
          <div className="text-gray-500 text-sm">{card.label}</div>
          <div className="text-2xl font-semibold">{card.value}</div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;
