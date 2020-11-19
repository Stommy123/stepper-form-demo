import React from 'react';

const GeneralForm = ({ handleChange, formData }) => (
  <>
    <div className='form-group'>
      <label>First Name</label>
      <input
        required
        type='text'
        placeholder='First Name'
        onChange={handleChange('firstName')}
        value={formData.firstName}
      />
    </div>
    <div className='form-group'>
      <label>Last Name</label>
      <input
        required
        type='text'
        placeholder='Last Name'
        onChange={handleChange('lastName')}
        value={formData.lastName}
      />
    </div>
    <div className='form-group'>
      <label>Are you an admin?</label>
      <input type='checkbox' onChange={handleChange('isAdmin')} value={formData.isAdmin} />
    </div>
  </>
);

export default GeneralForm;
