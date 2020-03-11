import React from 'react';
import ReactDOM from 'react-dom';
import PigDropZone from './pig-drop-zone.jsx';
import ReferenceMeasurement from './reference-measurement.jsx';

class FrontPig extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: '',
      refOrPig: 'reference',
      refSetPoints: null,
      refFirstPoint: {},
      refSecondPoint: {},
      measurement: 0,
      pigSetPoints: null,
      pigCenterPoint: {},
      pigOuterPoint: {},
    }

    this.fileUploaded = this.fileUploaded.bind(this);
    this.dropFileUploaded = this.dropFileUploaded.bind(this);
    this.changeRefSetPoint = this.changeRefSetPoint.bind(this);
    this.changePigSetPoint = this.changePigSetPoint.bind(this);
    this.setPoint = this.setPoint.bind(this);
    this.handleMeasurementChange = this.handleMeasurementChange.bind(this);
    this.getPixelLength = this.getPixelLength.bind(this);
    this.handleRefOrPig = this.handleRefOrPig.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Upload File
  fileUploaded(file) {
    this.setState({
      selectedFile: URL.createObjectURL(file.target.files[0]),
    });
  }

  // Drop Upload File
  dropFileUploaded(file) {
    this.setState({
      selectedFile: URL.createObjectURL(file[0])
    });
  }

  // Change RefSetPoint
  changeRefSetPoint(e) {
    this.setState({
      refSetPoints: e.target.name,
    });
  }

  // Change PigSetPoint
  changePigSetPoint(e) {
    console.log(e.name);
    // this.setState({

    // });
  }

  // Set Points
  setPoint(e) {
    if (this.state.refSetPoints === 'first') {
      this.setState({
        refFirstPoint: {
          x: e.nativeEvent.offsetX,
          y: e.nativeEvent.offsetY
        },
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

    if (this.state.pigSetPoints === 'center') {
      this.setState({
        pigCenterPoint: {
          x: e.nativeEvent.offsetX,
          y: e.nativeEvent.offsetY
        },
      });
    } else if (this.state.pigSetPoints === 'outer') {
      this.setState({
        pigOuterPoint: {
          x: e.nativeEvent.offsetX,
          y: e.nativeEvent.offsetY
        },
        pigSetPoints: null,
      });
    }
  }

  // Set the reference measurement
  handleMeasurementChange() {
    this.setState({
      measurement: event.target.value
    })
  }

  // Get length between two points in px
  getPixelLength(pointOne, pointTwo) {
    const x = pointOne.x - pointTwo.x;
    const y = pointOne.y - pointTwo.y;
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  }

  // Show either Ref. measurement or Pig measurement
  handleRefOrPig() {
    this.setState({
      refOrPig: event.target.name,
    });
  }

  // Submit to App
  handleSubmit() {
    const ref = this.getPixelLength(this.state.refFirstPoint, this.state.refSecondPoint) / this.state.measurement;
    const pigGirthRadius = this.getPixelLength(this.state.pigCenterPoint, this.state.pigOuterPoint);
    const pigGirthCircum = 2 * Math.PI * (pigGirthRadius / ref);
    // console.log('ref:', ref, 'pigR:', pigGirthRadius, 'pigC:', pigGirthCircum);
    this.props.setHeartGirth(pigGirthCircum);
    this.props.nextPage();
  }

  render() {
    return (
      <div className='pig-container'>
        <h1>Pig Heart Girth</h1>
        <div className='pig-picture'>
          <input type='file' onChange={this.fileUploaded} />
          <div className='picture-wrapper'>
            {this.state.selectedFile === '' ?
              <PigDropZone dropFileUploaded={this.dropFileUploaded} name={'Pig Front'} /> :
              <img ref="image" id='pig-picture-container' src={this.state.selectedFile} onClick={this.setPoint} />
            }
          </div>
        </div>
        <div className='btn-container'>
          <button className='btn btn--stripe' name='reference' onClick={this.handleRefOrPig}>Reference Measurement</button>
          <button className='btn btn--stripe' name='pig' onClick={this.handleRefOrPig}>Pig Heart Girth</button>
        </div>

        <div className='measurement-container'>
          {this.state.refOrPig === 'reference' ?
            <ReferenceMeasurement handleMeasurementChange={this.handleMeasurementChange} changeRefSetPoint={this.changeRefSetPoint} />
            :
            <div className='measurement-wrapper'>
              <h4>Pig Heart Girth</h4>
              <div className='set-btn-container'>
                <button className='btn btn--stripe' onClick={() => this.setState({ pigSetPoints: 'center' })}>Set Center Point</button>
                <button className='btn btn--stripe' onClick={() => this.setState({ pigSetPoints: 'outer' })}>Set Outer Point</button>
              </div>
            </div>
          }
        </div>
        <button className='btn btn--stripe btn-submit' onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default FrontPig;