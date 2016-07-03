import React from 'react';

class Progress extends React.Component {


	render() {

		return(

			<div className="container-fluid">
				<div className="progress">
					<span className="conversion__time-elapsed">{this.props.elapsed}</span>

					<progress value={this.props.position} max="1"></progress>

					<span className="converstion__time-total">{this.props.total}</span>
				</div>
			</div>
		);
	}
}

export default Progress;