import React from 'react';
import ReactDOM from 'react-dom';

function ReferenceMeasurement(props) {
  return (
    <div className='measurement-wrapper'>
      <h4>Reference Measurement</h4>
      <div className='input-container'>
        <label htmlFor='base-measurement'>Base Reference (inches)</label>
        <input type='number' onChange={props.handleMeasurementChange} className='base-measurement' />
      </div>
      <div className='set-btn-container'>
        <button className='btn btn--stripe' name='first' onClick={props.changeRefSetPoint}>Set First Point</button>
        <button className='btn btn--stripe' name='second' onClick={props.changeRefSetPoint}>Set Second Point</button>
      </div>
    </div>
  );
}

export default ReferenceMeasurement;
