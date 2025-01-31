import React from 'react';

function DashboardCards({ summary }) {
  if (!summary) {
    return (
      <div className="mb-4">
        <p className="text-gray-500">No summary data available yet.</p>
      </div>
    );
  }

  const { totalSpend, transactions, avgTransaction, merchants } = summary;

  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-1">Total Spend</h2>
        <p className="text-xl">${totalSpend}</p>
      </div>
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-1">Transactions</h2>
        <p className="text-xl">{transactions}</p>
      </div>
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-1">Average</h2>
        <p className="text-xl">${avgTransaction}</p>
      </div>
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-1">Merchants</h2>
        <p className="text-xl">{merchants}</p>
      </div>
    </div>
  );
}

export default DashboardCards;
