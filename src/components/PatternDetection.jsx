// src/components/PatternDetection.jsx
import React from 'react';
import PatternRow from './PatternRow';

function PatternDetection({ patterns }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Detected Patterns</h2>
      {patterns.length === 0 ? (
        <p className="text-gray-500">
          No pattern data yet. Try uploading a CSV.
        </p>
      ) : (
        <div className="space-y-4">
          {patterns.map((pattern, index) => (
            <PatternRow key={index} pattern={pattern} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PatternDetection;
