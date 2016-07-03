import React from 'react';

class ConversionZone extends React.Component {


	render() {

		return(
			<div className="container-fluid">
				<div className="conversionZone">
					<button className="btn btn-lg btn-success" id="convertButton">Convert!</button>
				</div>
			</div>
		);

	}
}

export default ConversionZone;