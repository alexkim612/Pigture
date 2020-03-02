import React from 'react';
import ReactDOM from 'react-dom';

class FrontPig extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: '',
      setPoints: null,
      firstPoint: {x: 0, y: 0},
      secondPoint: {x: 0, y: 0},
    }
    this.fileUploaded = this.fileUploaded.bind(this);
    this.setPoint = this.setPoint.bind(this);
  }

  fileUploaded(event) {
    this.setState({
      selectedFile: URL.createObjectURL(event.target.files[0]),
    });
    console.log(event.target.files[0])
  }

  setPoint(e) {
    console.log(e);
    if (this.state.setPoints === 'first') {
      this.setState({ 
        firstPoint: {
          x: e.nativeEvent.offsetX, 
          y: e.nativeEvent.offsetY 
        },
        setPoints: 'second',
      });
    } else if (this.state.setPoints === 'second') {
      this.setState({ 
        secondPoint: {
          x: e.nativeEvent.offsetX, 
          y: e.nativeEvent.offsetY 
        },
        setPoints: null,
      });
    }
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
        <div>
          <label htmlFor='base-measurement'>Base Reference Measurement (inches)</label>
          <input type='text' className='base-measurement'/>
          <button onClick={() => this.setState({setPoints:'first'})}>Set First Point</button>
          <button onClick={() =>this.setState({setPoints:'second'})}>Set Second Point</button>
        </div>
        <div>
          <button>Draw Pig Length</button>
        </div>
      </div>
    );
  }
}

export default FrontPig;