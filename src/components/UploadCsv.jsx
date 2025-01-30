import React from 'react';

function UploadCsv({ onSetNormalized, onSetPatterns }) {
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      // Backendinizin tam URL'sini yazabilirsiniz. Örnek: http://localhost:3000/api/upload
      const response = await fetch('http://localhost:3000/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        console.error('File upload failed with status:', response.status);
        return;
      }

      // /api/upload'dan gelecek JSON'ı okuyalım
      // Örneğin:
      // {
      //   "normalized_transactions": [ { original: "...", normalized: {...} }, ... ],
      //   "detected_patterns": [ { type: "...", merchant: "...", ... }, ... ]
      // }
      const data = await response.json();

      // App'e taşıyacağımız veriler
      onSetNormalized(data.normalized_transactions || []);
      onSetPatterns(data.detected_patterns || []);
      
      console.log('File uploaded successfully and data received:', data);
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };

  return (
    <div>
      <label 
        htmlFor="csvUpload" 
        className="cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        Upload CSV
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
