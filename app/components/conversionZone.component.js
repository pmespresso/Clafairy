import React from 'react';

class ConversionZone extends React.Component {


	readyFiles() {

	}

	prepareUrl() {

	}


	render() {

		return(

			<div className="conversionZone">
				<button className="btn btn-lg" id="convertButton" onClick={this.readyFiles} >Convert!</button>
			</div>

		);

	}
}

export default ConversionZone;