import React from 'react';

import Dropzone from 'react-dropzone';

class Dzone extends React.Component {

	render() {

		return (
			<section className="dropzone-wrapper">
				<div>
					<Dropzone className="dropzone" ref="dropzone" onDrop={this.props.onDrop} accept="image/*">
		              {
						this.props.filesUploaded.length > 0 
						? 
						<div>
						   	<h2>Loaded {this.props.filesUploaded.length} files...</h2>
						    	
						    <div>{this.props.filesUploaded.map((file, idx) => <div key={idx} className="dropzone-preview-image"><img src={file.preview} /> </div>)}</div>
						</div> 
						: 
						null
					  }
		            </Dropzone>
				</div>

			</section>
		);
	}
}

export default Dzone;