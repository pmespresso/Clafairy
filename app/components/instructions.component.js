import React from 'react';

class Instructions extends React.Component {

	render() {

		return (
			<div className="instructions">
				<h1 id="intro">Hi, I'm Clafairy!</h1>
				<h2 className="lead" id="instructions"> I help you rename your photos and videos from something useless like <br/> <br/> <b>Screenshot_293348934.jpg</b> <br/><br/>
				to something useful like <br/> <br/> <b>cliff_picnic_outdoors_sun_sky.jpg</b><br/><br/> </h2>

				<h3> So you save a ton of time renaming files! </h3>
				<hr/>
				<p> All you have to do is Drag & Drop your files into the dropzone below.</p>
			</div>
		);
	}
}

export default Instructions;