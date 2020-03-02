import React from 'react';
import ReactDOM from 'react-dom';

class SidePig extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: '',
      refOrPig: 'reference',
      refSetPoints: null,
      refFirstPoint: {x: 0, y: 0},
      refSecondPoint: {x: 0, y: 0},
      measurement: 0,
      pigSetPoints: null,
      pigFirstPoint: {x: 0, y: 0},
      pigSecondPoint: {x: 0, y: 0},
      pigThirdPoint: {x: 0, y: 0},
    }
    this.fileUploaded = this.fileUploaded.bind(this);
    this.setPoint = this.setPoint.bind(this);
    this.handleRefOrPig = this.handleRefOrPig.bind(this);
    this.handleMeasurementChange = this.handleMeasurementChange.bind(this);
    this.getPixelLength = this.getPixelLength.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fileUploaded(event) {
    this.setState({
      selectedFile: URL.createObjectURL(event.target.files[0]),
    });
    // console.log(event.target.files[0])
  }

  setPoint(e) {
    if (this.state.refSetPoints === 'first') {
      this.setState({ 
        refFirstPoint: {
          x: e.nativeEvent.offsetX, 
          y: e.nativeEvent.offsetY 
        },
        refSetPoints: 'second',
      });
    } else if (this.state.refSetPoints === 'second') {
      this.setState({ 
        refSecondPoint: {
          x: e.nativeEvent.offsetX, 
          y: e.nativeEvent.offsetY 
        },
        refSetPoints: null,
      });
    }

    if (this.state.pigSetPoints === 'first') {
      this.setState({ 
        pigFirstPoint: {
          x: e.nativeEvent.offsetX, 
          y: e.nativeEvent.offsetY 
        },
        pigSetPoints: 'second',
      });
    } else if (this.state.pigSetPoints === 'second') {
      this.setState({ 
        pigSecondPoint: {
          x: e.nativeEvent.offsetX, 
          y: e.nativeEvent.offsetY 
        },
        pigSetPoints: 'third',
      });
    } else if (this.state.pigSetPoints === 'third') {
      this.setState({ 
        pigThirdPoint: {
          x: e.nativeEvent.offsetX, 
          y: e.nativeEvent.offsetY 
        },
        pigSetPoints: null,
      });
    }
  }

  handleMeasurementChange() {
    this.setState({
      measurement: event.target.value
    })
  }

  getPixelLength(pointOne, pointTwo) {
    const x = pointOne.x - pointTwo.x;
    const y = pointOne.y - pointTwo.y;
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  }

  handleRefOrPig() {
    this.setState({
      refOrPig: event.target.name,
    });
  }

  handleSubmit() {
    const ref = this.getPixelLength(this.state.refFirstPoint, this.state.refSecondPoint) / this.state.measurement;
    const pigLengthOne = this.getPixelLength(this.state.pigFirstPoint, this.state.pigSecondPoint);
    const pigLengthTwo = this.getPixelLength(this.state.pigThirdPoint, this.state.pigSecondPoint);
    const pigLength = (pigLengthOne + pigLengthTwo) / ref;
    console.log('ref:', ref, 'pig1:', pigLengthOne, 'pig2:', pigLengthTwo);
    console.log('pigLength', pigLength);
    this.props.setLength(pigLength);
  }

  render() {
    return (
      <div className='front-pig-container'>
        <div className='pig-picture'>
          <input type='file' onChange={this.fileUploaded}/>
          <div className='picture-wrapper'>
            <img ref="image" id='front-pig-picture-container' src={this.state.selectedFile} onClick={this.setPoint}/>
          </div>
        </div>
        <button name='reference' onClick={this.handleRefOrPig}>Reference Measurement</button>
        <button name='pig' onClick={this.handleRefOrPig}>Pig Length</button>

        {this.state.refOrPig === 'reference' ? 
        <div>
          <h4>Reference Measurement</h4>
          <label htmlFor='base-measurement'>Base Reference (inches)</label>
          <input type='number' onChange={this.handleMeasurementChange} className='base-measurement'/>
          <button onClick={() => this.setState({refSetPoints:'first'})}>Set First Point</button>
          <button onClick={() => this.setState({refSetPoints:'second'})}>Set Second Point</button>
        </div>
        :
        <div>
          <h4>Pig Length</h4>
          <button onClick={() => this.setState({pigSetPoints:'first'})}>Set First Point</button>
          <button onClick={() => this.setState({pigSetPoints:'second'})}>Set Second Point</button>
          <button onClick={() => this.setState({pigSetPoints:'third'})}>Set Third Point</button>
        </div>
      }

      <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default SidePig;