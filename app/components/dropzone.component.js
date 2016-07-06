import React from 'react';

import Dropzone from 'react-dropzone';

class Dzone extends React.Component {

	render() {

		return (
			<section className="dropzone-wrapper">
				<div className="dropzone">
					<Dropzone onDrop={this.props.onDrop}>
		              
		            </Dropzone>
				</div>

				<div className="dropzoneInfo">

				</div>
			</section>
		);
	}
}

export default Dzone;