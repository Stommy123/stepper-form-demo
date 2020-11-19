import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Home, Previous, Submit } from './components';
import { emptyFormData, schema } from './constants';
import { mockRequest } from './utils';

const App = _ => {
  const [formData, setFormData] = useState(emptyFormData);
  const [activeSchema, setActiveSchema] = useState(null);

  const handleChange = field => evt => {
    setFormData({ ...formData, [field]: evt.target.value });
  };

  const handleSubmit = async evt => {
    evt.preventDefault();

    const nextForm = activeSchema?.next;

    if (nextForm) {
      setActiveSchema(schema[nextForm]);
      return;
    }

    // usually an api call would happen here
    await mockRequest('/some-backend-route', formData);
    toast.info('Form successfully submitted');

    setFormData(emptyFormData);
    setActiveSchema(null);
  };

  const initForm = _ => {
    setActiveSchema(schema.general);
  };

  const handlePrevious = _ => {
    const previousForm = activeSchema.previous;

    previousForm && setActiveSchema(schema[previousForm]);
  };

  if (!activeSchema) return <Home initForm={initForm} />;

  const ActiveForm = activeSchema.form;

  return (
    <form className='container' onSubmit={handleSubmit}>
      <Previous activeSchema={activeSchema} handlePrevious={handlePrevious} />
      <h3>{activeSchema.title}</h3>
      <ActiveForm handleChange={handleChange} formData={formData} />
      <Submit activeSchema={activeSchema} />
    </form>
  );
};

export default App;
