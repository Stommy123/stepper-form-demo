import React from 'react';

const CareerForm = ({ handleChange, formData }) => (
  <>
    <div className='form-group'>
      <label>Employer</label>
      <input
        type='text'
        placeholder='Employer'
        onChange={handleChange('employer')}
        value={formData.employer}
      />
    </div>
    <div className='form-group'>
      <label>Job Title</label>
      <input
        type='text'
        placeholder='Job Title'
        onChange={handleChange('jobTitle')}
        value={formData.jobTitle}
      />
    </div>
    <div className='form-group'>
      <label>Length of Employment (Years)</label>
      <select onChange={handleChange('employmentDuration')} value={formData.employmentDuration}>
        {[1, 2, 3, 4, 5, 6].map(duration => (
          <option key={duration}>{duration}</option>
        ))}
      </select>
    </div>
  </>
);

export default CareerForm;
