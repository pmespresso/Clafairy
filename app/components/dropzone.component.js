import React from 'react';

import Dropzone from 'react-dropzone';

class Dzone extends React.Component {

	onDrop (files) {
      console.log('Received files: ', files);
    }

	render() {

		return (
			<div className="dropzone">
				<Dropzone onDrop={this.onDrop}>
	              <div>Try dropping some files here, or click to select files to upload.</div>
	            </Dropzone>
			</div>
		);

	}
}

export default Dzone;