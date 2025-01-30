import React from 'react';

function PatternRow({ pattern }) {
  const {
    type,
    merchant,
    amount,
    frequency,
    confidence,
    next_expected,
    notes
  } = pattern || {};

  return (
    <div className="bg-white p-4 rounded-md shadow-sm">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-gray-800">{merchant || '—'}</div>
        <div className="text-right text-gray-800">
          {typeof amount === 'number' ? `$${amount}` : (amount || '—')}
        </div>
      </div>

      <div className="text-sm text-gray-500">
        {type || 'Unknown'} • {frequency || 'N/A'}
        {notes ? ` • ${notes}` : ''}
      </div>

      {(next_expected || confidence) && (
        <div className="flex items-center justify-between mt-2 text-sm">
          {next_expected && (
            <div className="text-gray-500">Next: {next_expected}</div>
          )}
          {confidence && (
            <div className="text-gray-500">
              Confidence: {Math.round(confidence * 100)}%
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PatternRow;
