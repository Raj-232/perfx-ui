// Step1.js
import React from 'react';
import TextField from '@mui/material/TextField';

function Step3({ formData, setFormData }) {
  return (
    <TextField
      label="Field 3"
      value={formData.field3}
      onChange={(e) => setFormData({ ...formData, field3: e.target.value })}
    />
  );
}

export default Step3;
