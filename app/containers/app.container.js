import React from 'react';

import Clarifai from 'clarifai';

import Instructions from '../components/instructions.component';
import DZone from '../components/dropzone.component';
import ConversionZone from '../components/conversionzone.component';

class AppContainer extends React.Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	numberOfFilesToUpload: 0,
	  	filesUploaded: []
	  }

	  this.onDrop = this.onDrop.bind(this);
	  // this.onOpenClick = this.onOpenClick.bind(this);

	  this.prepareClarifai = this.prepareClarifai.bind(this);
	  this.CLIENT_ID = "P13CldYplZrOqLN955yeXOKTc2iV0WiKiPfhB2x7";
	  this.CLIENT_SECRET = "P13CldYplZrOqLN955yeXOKTc2iV0WiKiPfhB2x7";

	}

	componentDidMount() {
		this.prepareClarifai();
	}

	prepareClarifai() {
		Clarifai.initialize({
		  'clientId': this.CLIENT_ID,
		  'clientSecret': this.CLIENT_SECRET
		});
	}

	// onOpenClick() {
	// 	this.refs.dropzone.open();
	// }

	onDrop (files) {
	  this.setState({ numberOfFilesToUpload: files.length });
      this.setState({ filesUploaded: files });
      console.log(this.state.numberOfFilesToUpload);
      console.log(this.state.filesUploaded);
    }

	render() {
		return (
			<section>
				<Instructions />
				<DZone onDrop={this.onDrop} filesUploaded={this.state.filesUploaded} />
			</section>
		);
	}
}

export default AppContainer;