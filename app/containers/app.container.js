import React from 'react';

import Clarifai from 'clarifai';

var Keys = require('./keys');

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
	  this.imageToDataUrl = this.imageToDataUrl.bind(this);
	  this.getTagsByImageBytes = this.getTagsByImageBytes.bind(this);
	  this.readyFiles = this.readyFiles.bind(this);
	  // this.onOpenClick = this.onOpenClick.bind(this);
	  this.CLIENT_ID = Keys.CLIENT_ID;
	  this.CLIENT_SECRET = Keys.CLIENT_SECRET;

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

	readyFiles() {
		// for each file, get tags by image bytes
		let files = this.state.filesUploaded;
		for (var i=0; i < files.length; i++) {
			let path = files[i].path;
			this.getTagsByImageBytes(path);	
		}
	}

	imageToDataUrl(filePath){
	  return new Promise(function(resolve, reject) {
	    var img = new Image();
	    img.crossOrigin = 'Anonymous';
	    img.onload = function() {
	      var canvas = document.createElement('canvas');
	      var ctx = canvas.getContext('2d');
	      canvas.height = this.height;
	      canvas.width = this.width;
	      ctx.drawImage(this, 0, 0);
	      var dataURL = canvas.toDataURL("image/jpeg", 0.9);
	      resolve(dataURL);
	    };
	    img.src = filePath;
	  });
	}

	getTagsByImageBytes(filePath) {
		// Clarifai.getTagsByUrl('https://samples.clarifai.com/wedding.jpg').then(
		//   this.handleResponse,
		//   this.handleError
		// );

		let _this = this;

		this.imageToDataUrl(filePath).then(
		  function(dataURL){
		        var b64 = dataURL.split('base64,')[1];
		    Clarifai.getTagsByImageBytes(b64).then(
		      function(resp){
		        console.log('success', resp);
		        _this.renameThatFile(resp, filePath);
		      },
		      function(resp){
		        console.log('error', resp); 
		      });
		    }
		);
	}


	renameThatFile(resp, src) {
		var tags = resp.results[0].result.tag.classes;
		var newName = tags.join("_");
		console.log(newName);


	}

	
	handleResponse(response){
	  console.log('promise response:', JSON.stringify(response));
	}

	handleError(err){
	  console.log('promise error:', err);
	}
	

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
				<DZone onDrop={this.onDrop} filesUploaded={this.state.filesUploaded} readyFiles={this.readyFiles} />

				<Footer />
			</section>
		);
	}
}

export default AppContainer;