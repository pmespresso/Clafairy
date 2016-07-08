import React from 'react';

import Clarifai from 'clarifai';

import Axios from 'axios';

import ClientOAuth2 from 'client-oauth2';

import Instructions from '../components/instructions.component';
import DZone from '../components/dropzone.component';
import ConversionZone from '../components/conversionzone.component';
import Footer from '../components/footer.component';

class AppContainer extends React.Component {

	constructor(props) {
	  super(props);
	
		/* Preferred structure for filesUploaded (implement v0.0.2)

		{
	  			originalName: '',
	  			tags: [],
	  			path: '',
	  			suggestedName: ''
	  		}
	  	*/

	  this.state = {
	  	filesUploaded: []
	  }

	  this.onDrop = this.onDrop.bind(this);
	  // this.onOpenClick = this.onOpenClick.bind(this);
	  this.CLIENT_ID = "P13CldYplZrOqLN955yeXOKTc2iV0WiKiPfhB2x7";
	  this.CLIENT_SECRET = "sbnB_lTqFVCvRPBrYNfhod5AtnETpy1_szMhAwSP";

	}

	componentDidMount() {
		Clarifai.initialize({
		  'clientId': this.CLIENT_ID,
		  'clientSecret': this.CLIENT_SECRET
		});
	}

	// onOpenClick() {
	// 	this.refs.dropzone.open();
	// }

	convertImageToBytes(image) {
		return ""
	}

	getTagsByImageBytes(image) {
		// Clarifai.getTagsByUrl('https://samples.clarifai.com/wedding.jpg').then(
		//   this.handleResponse,
		//   this.handleError
		// );

		Clarifai.getTagsByImageBytes().then(
		  this.handleResponse,
		  this.handleError
		);
	}


	handleResponse(response){
	  console.log('promise response:', JSON.stringify(response));
	};

	handleError(err){
	  console.log('promise error:', err);
	};
	

	onDrop(files) {
			
		this.setState(function(state) {
			return {
				filesUploaded: state.filesUploaded.concat(files)
			}
		});


    }




	render() {
		return (
			<section>
				<Instructions />
				<DZone onDrop={this.onDrop} filesUploaded={this.state.filesUploaded} />

				<Footer />
			</section>
		);
	}
}

export default AppContainer;