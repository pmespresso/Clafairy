import React from 'react';

class Instructions extends React.Component {

	render() {

		return (
			<div className="instructions">
				<h1> Clafairy </h1>
				<h2> I help you rename your photos and videos from something useless like <i className="example_file_name">"Screenshot_293348934.jpg"</i> <br /> to something useful like <br /> <i className="example_file_name">"cliff_picnic_outdoors_sun_sky.jpg"</i> </h2>

				<h3> So you save a ton of time renaming files! </h3>
				<hr/>
				<p> All you have to do is Drag & Drop your files into the dropzone below.</p>
				<hr/>
			</div>
		);
	}
}

export default Instructions;