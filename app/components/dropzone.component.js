import React from 'react';

import Dropzone from 'react-dropzone';
import ConversionZone from './conversionZone.component';
import Progress from './progress.component';

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
		            <ConversionZone readyFiles={this.props.readyFiles} />
				</div>
					
			</section>
		);
	}
}

export default Dzone;