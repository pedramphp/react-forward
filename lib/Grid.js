"use strict";

import Row from './Row';
import Cell from './Cell';


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

		console.log(this.matrix);

	}

/*
	renderCol() {
		return <div className="col">
		Col
		</div>
	}

	renderRow() {
		return <div className="row">
			Row
			{Array.apply(0, new Array(this.props.cols)).map(index => this.renderCol() )}
		</div>
	}

	renderGrid() {
		return <div className="grid">
			{Array.apply(0, new Array(this.props.rows)).map(index => this.renderRow() )}
		</div>;
	}
*/
	render() {
		return <div className="grid">
		{
			this.matrix.map((cells, index) =>
				<Row key={index}>
					{cells.map(cellId =>
						<Cell />
					)}
				</Row>
			)
		}
		</div>
	}
};

Grid.defaultProps = {
	rows: 6,
	cols: 6
};

export default Grid;
