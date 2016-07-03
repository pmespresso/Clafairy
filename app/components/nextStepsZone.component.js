import React from 'react';

class NextStepsZone extends React.Component {
	render() {
		return(
			<div className="nextStepsZone">
				<button className="btn btn-md btn-primary" id="convertMore">Convert More! </button>

				<button className="btn btn-md btn-info" id="goToDirectory">Open Folder</button>

				<button className="btn btn-md btn-warning" id="upgrade">Upgrade to <b> Pro </b> </button>
			</div>
		);
	}

}

export default NextStepsZone;