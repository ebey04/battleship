const Gameboard = require('../src/gameboard');
const Ship = require('../src/ship'); 



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

describe('ship placement on gameboard', () => {
    test('horizontal placement of ship works', () => {
    const board = new Gameboard();
    const ship = new Ship(3);

    expect(board.placeShip(ship, [1, 2], "horizontal")).toEqual([
        [1,2],
        [1,3],
        [1,4]
        ]);
    });
    test('vertical placement of ship works', () => {
    const board = new Gameboard();
    const ship = new Ship(3);

    expect(board.placeShip(ship, [1, 2], "vertical")).toEqual([
        [1,2],
        [2,2],
        [3,2]
        ]);
    });
})