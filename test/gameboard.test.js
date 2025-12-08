const Gameboard = require('../src/gameboard');


describe('gameboard length and width', () => {
    test('gameboard has correct # of rows', () => {
    const board = new Gameboard();
    expect(board.grid).toHaveLength(10)
    });
    test('gameboard has correct # of columns', () => {
        const board = new Gameboard();
        expect(board.grid[0]).toHaveLength(10)
    })
} )

