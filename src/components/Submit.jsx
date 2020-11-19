import React from 'react';

const SubmitButton = ({ activeSchema }) => (
  <div className='form-group submit-group'>
    <button type='submit'>{activeSchema.next ? 'Next!' : 'Submit!'}</button>
  </div>
);

export default SubmitButton;
