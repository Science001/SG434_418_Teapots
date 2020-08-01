import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div style={{ display: 'flex', placeContent: 'center' }}>
      <Spinner as="span" animation="grow" size="sm" className="mx-1"/>
      <Spinner as="span" animation="grow" size="sm" className="mx-1"/>
      <Spinner as="span" animation="grow" size="sm" className="mx-1"/>
    </div>
  );
};

export default Loader;
