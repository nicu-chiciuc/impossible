const models = {
	'small' : [
		{col: 1, row: 0},
		{col: 0, row: 0},
		{col: 0, row: 1},
		{col: 0, row: 2},
		{col: 1, row: 1, parents: [0]},
		{col: 2, row: 0, parents: [0, 1]},
	],

	'standard' : [
		{col: 1, row: 0},
		{col: 0, row: 0},
		{col: 0, row: 1},
		{col: 0, row: 2},
		{col: 0, row: 3},
		{col: 1, row: 2},
		{col: 2, row: 1},
		{col: 3, row: 0},
		{col: 2, row: 0, parents: [0, 1, 2]},

		// {col: 1, row: 1, next: 10},
		// {col: 2, row: 1, next: 10},
	],

	'bigger': [
		{col: 1, row: 0},
		{col: 0, row: 0},
		{col: 0, row: 1},
		{col: 0, row: 2},
		{col: 0, row: 3},
		{col: 0, row: 4},
		{col: 1, row: 3},
		{col: 2, row: 2},
		{col: 3, row: 1},
		{col: 4, row: 0},
		{col: 3, row: 0},
		{col: 2, row: 0, parents: [0, 1, 2]},
	],

	'loop' : [
		{col: 1, row:  0},
		{col: 0, row:  0},
		{col: 0, row:  1},
		{col: 0, row:  2},
		{col: 0, row:  3},
		{col: 1, row:  2},
		{col: 2, row:  1},
		{col: 3, row:  0},
		{col: 4, row: -1},
		{col: 5, row: -2},
		{col: 6, row: -3},
		{col: 6, row: -2},
		{col: 6, row: -1},
		{col: 6, row:  0},
		{col: 5, row:  0},
		{col: 4, row:  0},
		{col: 3, row:  0},
		{col: 2, row:  0, parents: [0, 1, 2]},
	],

	'loop2' : [
		{col: 1, row:  0},
		{col: 0, row:  0},
		{col: 0, row:  1},
		{col: 0, row:  2},
		{col: 0, row:  3},
		{col: 1, row:  2},
		{col: 2, row:  1},
		{col: 3, row:  0},
		{col: 4, row: -1},
		{col: 5, row: -2},
		{col: 6, row: -3},
		{col: 6, row: -2},
		{col: 6, row: -1},
		{col: 6, row:  0},
		{col: 5, row:  0, parents: [6, 7, 8]},
		{col: 4, row:  0, parents: [5, 6, 7, 8]},
		{col: 3, row:  0, parents: [5, 6, 7, 8]},
		{col: 2, row:  0, parents: [0, 1, 2, 5, 6, 7]},
	],

	'hexSmall': [
		{col: -1, row:  0},
		{col: -2, row:  0},
		{col: -1, row: -1},
		{col:  0, row: -2, parents: [17]},
		{col:  0, row: -1, parents: [0]},

		{col:  0, row:  0, parents: [0]},
		{col:  0, row:  1},
		{col:  0, row:  2},
		{col: -1, row:  2},
		{col: -2, row:  2, parents: [5]},

		{col: -1, row:  1, parents: [0, 6]},
		{col:  0, row:  0, parents: [0]},
		{col:  1, row: -1},
		{col:  2, row: -2},
		{col:  2, row: -1},

		{col:  2, row:  0, parents: [11]},
		{col:  1, row:  0, parents: [12]},
		{col:  0, row:  0, parents: [0, 1]},
	],

	'hex': [
		{col: -2, row:  0},
		{col: -3, row:  0},
		{col: -2, row: -1},
		{col: -1, row: -2},
		{col:  0, row: -3},
		{col:  0, row: -2},
		{col:  0, row: -1},

		{col:  0, row:  0},
		{col:  0, row:  1},
		{col:  0, row:  2},
		{col:  0, row:  3},
		{col: -1, row:  3},
		{col: -2, row:  3},
		{col: -3, row:  3},
		{col: -2, row:  2, parents: [6, 7, 8]},
		{col: -1, row:  1, parents: [6, 7, 8]},

		{col:  0, row:  0, parents: [5, 6, 7, 8]},
		{col:  1, row: -1, parents: [5, 6, 7]},

		{col:  2, row: -2},
		{col:  3, row: -3},
		{col:  3, row: -2},
		{col:  3, row: -1},
		{col:  3, row:  0},

		{col:  2, row:  0, parents: [15, 16, 17,  6, 7, 8]},
		{col:  1, row:  0, parents: [14, 15, 16, 17,  5, 6, 7, 8]},

		{col:  0, row:  0, parents: [14, 15, 16, 17, 5, 6, 7, 8]},
		{col: -1, row:  0, parents: [14, 15, 0, 1, 2, 5, 6, 7]},
	],
	
	'trapez': [
		{col:  0, row:  0 },
		{col:  0, row:  1 },
		{col:  0, row:  2 },
		{col:  0, row:  3 },
		{col:  1, row:  3, parents: [3]},
		{col:  2, row:  3, parents: [4]},
		{col:  3, row:  3, parents: [5]},
		{col:  4, row:  2 },
		{col:  5, row:  1 },
		{col:  6, row:  0 },
		{col:  5, row:  0 },
		{col:  4, row:  0 },
		{col:  3, row:  0 },
		{col:  2, row:  0, parents: [0, 1]},
		{col:  1, row:  0, parents: [0, 1]},
	],

	'pseudoTrapez': [
		{col:  0, row:  0 },
		{col:  0, row:  1 },
		{col:  0, row:  2 },
		{col:  0, row:  3 },
		{col:  1, row:  2 },
		{col:  1, row:  3 },
		{col:  2, row:  2 },
		{col:  2, row:  3 }, // 7
		{col:  3, row:  2 },
		{col:  3, row:  3 },
		{col:  4, row:  2 },
		{col:  5, row:  1 },
		{col:  6, row:  0 },
		{col:  5, row:  0 },
		{col:  4, row:  0 },
		{col:  3, row:  0 },
		{col:  2, row:  0, parents: [0, 1]},
		{col:  1, row:  0, parents: [0, 1]},
	]
}

export default models