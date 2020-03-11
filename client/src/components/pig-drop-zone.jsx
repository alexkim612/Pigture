import React from 'react';
import Dropzone from 'react-dropzone';


function PigDropZone(props) {
  return (
    <div>
      <Dropzone onDrop={acceptedFiles => props.dropFileUploaded(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
        <div className='dropzone'>{props.name} Pigture Here</div>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
}

export default PigDropZone;