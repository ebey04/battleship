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

describe('board placement validity', () => {
    test('horizontal placement check', () => {
        const board = new Gameboard();
        const ship = new Ship(3);
        expect(board.placeShip(ship, [1,8], "horizontal")).toBe(false)
    });
    test('vertical placement check', () => {
        const board = new Gameboard();
        const ship = new Ship(3);

        expect(board.placeShip(ship, [8,0], "vertical")).toBe(false)
    });
})

test('places a ship on the grid', () => {
    const board = new Gameboard();
    const ship = new Ship(3);

    board.placeShip(ship, [4,0], "horizontal");

    expect(board.grid[4][0]).toBe(ship);
    expect(board.grid[4][0 + 1]).toBe(ship);
    expect(board.grid[4][0 + 2]).toBe(ship);

})

test('check shipB does not overlap shipA', () => {
    const board = new Gameboard();
    const shipA = new Ship(3);
    const shipB = new Ship(4);

    board.placeShip(shipA, [4,0], "horizontal");
    board.placeShip(shipB, [4,1], "horizontal");

    expect(board.grid[4][1]).toBe(shipA);
})