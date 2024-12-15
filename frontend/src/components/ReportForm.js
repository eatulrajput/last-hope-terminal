// src/components/ReportForm.js

import React, { useState } from 'react';

function ReportForm() {
  const [report, setReport] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    setReport({ ...report, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit report to backend
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        placeholder="Report Title"
        value={report.title}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={report.description}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Report</button>
    </form>
  );
}

export default ReportForm;
