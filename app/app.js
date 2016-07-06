'use strict'
// ES6 Component
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/app.container';

// import Dzone from './components/dropzone.component';

// import ConversionZone from './components/conversionZone.component';

// import Progress from './components/progress.component';

// import RenamedZone from './components/renamedZone.component';

// import NextStepsZone from './components/nextStepsZone.component';

// import Footer from './components/footer.component';
// import AppContainer from './containers/app.container';

// Search component created as a class
class App extends React.Component {

    // render method is most important
    // render method returns JSX template


    render() {
        return (

        	<div className="clafairy">
	        	<div className="wrapper">
	        		<AppContainer />
	        	</div>
	        </div>
        );
    }
}

ReactDOM.render( < App / > ,
    document.getElementById('content')
);