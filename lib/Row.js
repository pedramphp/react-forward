"use strict";


// grid is list of rows and cells
class Row extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		return <div className="row">
			{this.props.children}
		</div>
	}
};

export default Row;
