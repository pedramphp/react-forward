"use strict";


// grid is list of rows and cells
class Cell extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		return <div onClick={this.props.recordGuess.bind(this, this.props.id)}
					className={`cell active-${this.props.active} ${this.props.guessState}`}>

			{this.props.id}
		</div>
	}
};

export default Cell;
