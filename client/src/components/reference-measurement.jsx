import React from 'react';
import ReactDOM from 'react-dom';

function ReferenceMeasurement(props) {
  return (
    <div>
      <h4>Reference Measurement</h4>
      <div className='input-container'>
        <label htmlFor='base-measurement'>Base Reference (inches)</label>
        <input type='number' onChange={props.handleMeasurementChange} className='base-measurement' />
      </div>
      <button className='btn btn--stripe' name='first' onClick={props.changeRefSetPoint}>Set First Point</button>
      <button className='btn btn--stripe' name='second' onClick={props.changeRefSetPoint}>Set Second Point</button>
    </div>
  );
}

export default ReferenceMeasurement;
