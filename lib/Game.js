import Grid from './Grid';
import Footer from './Footer';

// describe your UI in terms of the state. then manipulate the state.
// three guess game over
// time it if it is less than 10 seconds game over
// play again button. don't change the state.
export default class Game extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			gameState: "ready",
			wrongGuesses: [],
			correctGuesses: []
		};
	}

	componentDidMount() {

		this.changeGameState('memorize');
	}

	changeGameState(gameState) {
		setTimeout(() => {
			this.setState({
				gameState: gameState
			}, () => { //setState has a callback function
 				this.changeGameState('recall')
			});

		}, 2000);
	}

	recordGuessResult(isCorrectGuess, cellId) {
		console.log(isCorrectGuess, cellId);
		let { correctGuesses, wrongGuesses } = this.state;
		if(isCorrectGuess) {
			correctGuesses.push(cellId);
		} else {
			wrongGuesses.push(cellId);
		}

		this.setState({
			correctGuesses,
			wrongGuesses
		});
	}

	render() {
		return <div>
			<Grid {...this.props} {...this.state} recordGuessResult={this.recordGuessResult.bind(this)}/>
			<Footer {...this.props} {...this.state} />
		</div>
	}

};

Game.defaultProps = {
	hints: {
		ready: "Get Ready...",
		memorize: "Memorize!!!",
		recall: "Go..."
	}
};
