import React from 'react';

const Home = ({ initForm }) => (
  <div className='container'>
    <p>Click the button to start filling out the form!</p>
    <button onClick={initForm}>Start!</button>
  </div>
);

export default Home;
