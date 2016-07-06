import React from 'react';

import Instructions from '../components/instructions.component';
import DZone from '../components/dropzone.component';

class AppContainer extends React.Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	filesUploaded: []
	  }

	  this.onDrop = this.onDrop.bind(this);

	}

	componentDidMount() {

	}

	prepareUrl(url) {

	}

	onDrop (files) {
      this.setState({ filesUploaded: files });
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