import React from 'react';

class ConversionZone extends React.Component {

	render() {

		return(

			<div className="conversionZone">
				<button className="btn btn-lg" id="convertButton" onClick={this.props.readyFiles} >Convert!</button>
			</div>

		);

	}
}

export default ConversionZone;