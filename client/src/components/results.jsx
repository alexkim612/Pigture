import React from 'react';
import ReactDOM from 'react-dom';

function Results(props) {
  return(
    <div className="results-container">
      <h1 className="results">
        Results
      </h1>
      <div className="weight-container">
        <div className="statistics">
          Live Weight: {(props.weight).toFixed(2)}lbs
        </div>
        <div className="statistics">
          Carcass Weight: {(props.weight*0.72).toFixed(2)}lbs
        </div>
        <div className="statistics">
          Ham: {(props.weight*0.72*0.16).toFixed(2)}lbs
        </div>
        <div className="statistics">
          Pork Loin: {(props.weight*0.72*0.12).toFixed(2)}lbs
        </div>
        <div className="statistics">
          Pork Belly: {(props.weight*0.72*0.13).toFixed(2)}lbs
        </div>
        <div className="statistics">
          Spare Ribs: {(props.weight*0.72*0.03).toFixed(2)}lbs
        </div>
        <div className="statistics">
          Shoulder: {(props.weight*0.72*0.08).toFixed(2)}lbs
        </div>
      </div>
      <div className='pig-gif-container'>
        <img className='pig-gif' src="https://cdn.clipart.email/10093347c236cd9b9d9a81fe5596102a_gif-parade_442-442.gif"/>
      </div>
    </div>
  );
}

export default Results;