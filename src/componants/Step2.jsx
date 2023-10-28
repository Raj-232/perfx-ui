// Step1.js
import React from 'react';
import TextField from '@mui/material/TextField';

function Step2({ formData, setFormData }) {
  return (
    <TextField
      label="Field 2"
      value={formData.field2}
      onChange={(e) => setFormData({ ...formData, field2: e.target.value })}
    />
  );
}

export default Step2;
