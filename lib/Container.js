import Timer from './Timer';
import Game from './Game';

export default class Container extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			timers: [50, 100],
			inputValue: ""
		};
	}

	addTimer() {
		// copy state and push it
		let timers = this.state.timers;

		timers.push(this.state.inputValue);

		this.setState({
			timers,
			inputValue: ""
		})
	}

	// onKeyDown
	updateInput(e) {
		this.setState({
			inputValue: e.target.value
		})
	}

	render() {
		return <div>
			<input
				value={this.state.inputValue}
				onChange={this.updateInput.bind(this)}
			/>
			<button onClick={this.addTimer.bind(this)} >
				Add
			</button>
			{this.state.timers.map((timer, index) => <Timer key={index} initialSeconds={timer} />)}
			<Timer />

			<Game rows={5} columns={5} activeCellCount={6} />
		</div>
	}
/*
	render() {
		return <div>
			<input />
			<button onCLick={this.addTimer.biid(this)} />
				addTimer
			</button>
		</div>
	}
	*/
};
