import React from 'react';
import ReactDOM from 'react-dom';

class FrontPig extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: '',
    }
    this.fileUploaded = this.fileUploaded.bind(this);
  }

  fileUploaded(event) {
    this.setState({
      selectedFile: URL.createObjectURL(event.target.files[0]),
    });
    console.log(event.target.files[0])
  }

  render() {
    return (
      <div className='front-pig-container'>
        <div className='pig-picture'>
          <input type='file' onChange={this.fileUploaded}/>
          <div className='picture-wrapper'>
            <img id='front-pig-picture-container' src={this.state.selectedFile}/>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPig;