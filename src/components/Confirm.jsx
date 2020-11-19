import React from 'react';

const Confirm = ({ formData }) => (
  <>
    {Object.entries(formData).map(([field, value]) => (
      <div key={field} className='response'>
        {field} - {value}
      </div>
    ))}
  </>
);

export default Confirm;
