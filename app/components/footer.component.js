import React from 'react';

class Footer extends React.Component {

	render() {
		
		return(
			<div>

				<div className="push"></div>
			 	<div className="footer">
			 		<hr />
					<p className="center">Copyright (c) 2016</p>
					<a href="#"><p className="left">Built With Clarifai</p></a>
					<a href="#"><p className="right">Upgrade To Pro</p></a>
				</div>
			</div>
		);
	}
}

export default Footer;