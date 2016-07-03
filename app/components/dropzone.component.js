import React from 'react';

import DropzoneComponent from 'react-dropzone-component';

class Dzone extends React.Component {

	componentConfig() {
		const config: {
			iconFiletypes: ['.jpg', '.png', '.gif'],
		    showFiletypeIcon: true
		}

		return config;
	}










	render() {

		return (

			<div className="dzone">
				<DropzoneComponent 
						config={this.componentConfig.bind(this)} 
						action="uploads.js" 
						eventHandlers={eventHandlers}
	                    djsConfig={djsConfig}/>
	        </div>
		);
	}
}

export default Dzone;