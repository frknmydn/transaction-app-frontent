import React from 'react';

function MerchantRow({ transaction }) {
  const { original, normalized } = transaction || {};
  const { merchant, category, sub_category, flags } = normalized || {};

  return (
    <div className="bg-white p-4 rounded-md shadow-sm">
      <div className="text-sm text-gray-500">Original</div>
      <div className="font-medium text-gray-800">{original || '—'}</div>
      
      <div className="mt-2 flex items-center justify-between">
        <div>
          {/* Tag / Flag Alanları */}
          <div className="flex flex-wrap gap-2 text-sm text-gray-600 mt-1">
            {category && <span className="bg-gray-100 px-2 py-1 rounded">{category}</span>}
            {sub_category && <span className="bg-gray-100 px-2 py-1 rounded">{sub_category}</span>}
            {flags?.map((flag, idx) => (
              <span key={idx} className="bg-gray-100 px-2 py-1 rounded">
                {flag}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Normalized</div>
          <div className="font-semibold text-gray-800">{merchant || '—'}</div>
        </div>
      </div>
    </div>
  );
}

export default MerchantRow;
