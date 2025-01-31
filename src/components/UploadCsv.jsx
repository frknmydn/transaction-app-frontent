import React, { useState } from 'react';

function UploadCsv({ onSetNormalized, onSetPatterns, onSetSummary }) {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      setIsUploading(true);

      const response = await fetch('https://transaction-analysis-production.up.railway.app/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        console.error('File upload failed with status:', response.status);
        setIsUploading(false);
        return;
      }

      const data = await response.json();
      console.log('File uploaded successfully and data received:', data);

      onSetNormalized(data.normalized_transactions || []);
      onSetPatterns(data.detected_patterns || []);

      if (onSetSummary && data.summary) {
        onSetSummary(data.summary);
      }

    } catch (error) {
      console.error('Error uploading file', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <label
        htmlFor="csvUpload"
        className="cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        {isUploading ? 'Uploading...' : 'Upload CSV'}
      </label>
      <input
        type="file"
        id="csvUpload"
        accept=".csv"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default UploadCsv;
