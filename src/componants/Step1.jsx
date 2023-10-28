// Step1.js
import React from 'react';
import TextField from '@mui/material/TextField';

function Step1({ formData, setFormData }) {
  return (<div>
    <TextField
      label="Field 1"
      value={formData.field1}
      onChange={(e) => setFormData({ ...formData, field1: e.target.value })}
    />
        <TextField
      label="Field 5"
      value={formData.field5}
      onChange={(e) => setFormData({ ...formData, field5: e.target.value })}
    />
    </div>
  );
}

export default Step1;
