import React from 'react';
import Dropzone from 'react-dropzone';


function PigDropZone(props) {
  return (
    <div className='dropzone'>
      <Dropzone onDrop={acceptedFiles => props.dropFileUploaded(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
}

export default PigDropZone;