import React from 'react';

const AboutForm = ({ handleChange, formData }) => (
  <>
    <div className='form-group'>
      <label>Favorite Pet</label>
      <input
        type='text'
        placeholder='Favorite Pet'
        onChange={handleChange('favoritePet')}
        value={formData.favoritePet}
      />
    </div>
    <div className='form-group'>
      <label>Dream Vacation</label>
      <input
        type='text'
        placeholder='Dream Vacation'
        onChange={handleChange('dreamVacation')}
        value={formData.dreamVacation}
      />
    </div>
  </>
);

export default AboutForm;
