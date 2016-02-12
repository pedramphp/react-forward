"use strict";

class Footer extends React.Component {

	constructor(props){
		super(props);
		console.log("props footer", props);
	}

	componentDidMount() {
	}

	render() {
		return <div>
			{this.props.hints[this.props.gameState]}
		</div>
	}
};


export default Footer;
