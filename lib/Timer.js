"use strict";
// props are immutable, you can't change it.
// you can change the state of the Component
class Timer extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			remainingSeconds: props.initialSeconds
		};
	}

	// before component reach the browser
	componentWillMount() {
	}

	stopTimer() {
		clearInterval(this.timerId);
		this.timerId = null
	}

	startTimer() {
		this.timerId = setInterval(() => {
			if(this.state.remainingSeconds === 0) {
				this.stopTimer();
				return;
			}

			this.setState({
				remainingSeconds: this.state.remainingSeconds - 1
			});

		}, 1000);
	}

	// se is synthetic event - lose all properties. - it's react event
	handelClick(se) {
		console.log(this.timerId);
		if(this.timerId){
			this.stopTimer();
		} else {
			this.startTimer();
		}
	}

	// component is in the browser ready
	componentDidMount() {
		// run this command when the component is ready

		this.startTimer();

	}

	render() {// you have to bind this to event handlers
		return <div onClick={this.handelClick.bind(this)}>
			{this.state.remainingSeconds}
		</div>;
	}
};

// default values
Timer.defaultProps = {
	initialSeconds: 12
};

export default Timer;
