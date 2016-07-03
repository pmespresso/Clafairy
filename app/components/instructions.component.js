import React from 'react';

class Instructions extends React.Component {

	render() {

		return (
			<div className="instructions">
				<h1 id="intro">Hi, I'm Clafairy!</h1>
				<h3 className="lead" id="instructions"> I help you rename your photos and videos from something useless like <b>Screenshot_293348934</b> <hr/>
				to something useful like <b>cliff_picnic_outdoors_sun_sky</b>. <hr/> So you save a ton of time renaming files! </h3>
				
				<p> All you have to do is Drag & Drop your files into the dropzone below.</p>
			</div>
		);
	}
}

export default Instructions;