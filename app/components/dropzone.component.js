import React from 'react';

import Dropzone from 'react-dropzone';
import ConversionZone from './conversionZone.component';
import Progress from './progress.component';

class Dzone extends React.Component {

	readyFiles() {
		let first_file = this.props.filesUploaded[0];
		let path = first_file.path;

		console.log(path);
		//get path of file
		//prepare url
		//post
    }

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
						    	
						    <div id="dropzone-preview-image">{this.props.filesUploaded.map((file, idx) => 
						    	<div key={idx} className="dropzone-preview-image" >
						    		<img src={file.preview} />
						    		<span> {file.name} </span>
						    	</div>
						    )}

						   	</div>
						</div> 
						: 
						null
					  }
					  
		            </Dropzone>
				</div>
					<ConversionZone readyFiles={this.readyFiles.bind(this)}/>
			</section>
		);
	}
}

export default Dzone;