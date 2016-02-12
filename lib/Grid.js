"use strict";

import Row from './Row';
import Cell from './Cell';
import _ from "lodash";

// grid is list of rows and cells
class Grid extends React.Component {

	constructor(props){
		super(props);

		this.prepareMatrix();
	}

	prepareMatrix() {

		this.matrix = [];

		for(let i = 0; i < this.props.rows; i++){
			let row = [];
			for(let j = 0; j < this.props.columns; j++){
				row.push(`${i}${j}`)
			}
			this.matrix.push(row);
		}

		let flatMatrix = _.flatten(this.matrix);
		this.randomActiveCells = _.sampleSize(flatMatrix, this.props.activeCellCount);
	}

	recordGuess(cellId) {
		if (this.props.gameState == "recall"){
			console.log("Guess...", cellId);
			this.props.recordGuessResult(this.isCellActive(cellId), cellId);
		}
	}

	guessState(cellId) {
		if (this.props.wrongGuesses.indexOf(cellId) >= 0 ){
			return 'red';
		}

		if (this.props.correctGuesses.indexOf(cellId) >= 0 ){
			return 'green';
		}

		return '';
	}

	isCellActive(cellId){
		return this.randomActiveCells.indexOf(cellId) >= 0
	}

	cellIsActive(cellId) {
		return this.randomActiveCells.indexOf(cellId) >= 0 && this.props.gameState === 'memorize'
	}

	render() {
		return <div className="grid">
		{
			this.matrix.map((cells, index) =>
				<Row key={index}>
					{cells.map(cellId =>

						<Cell
							id={cellId}
							key={cellId}
							active={this.cellIsActive(cellId)}
							recordGuess={this.recordGuess.bind(this)}
							guessState={this.guessState(cellId)}
						/>
					)}
				</Row>
			)
		}
		</div>
	}
};

Grid.defaultProps = {
	rows: 6,
	columns: 6
};

export default Grid;
