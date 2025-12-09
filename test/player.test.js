const Gameboard = require('../src/gameboard');
const Player = require('../src/player');

test('attack calls opponent receiveAttack', () => {
    const player1 = new Player();
    const player2 = new Player();

    player2.board.receiveAttack = jest.fn();

    const coord = [3, 4];

    player1.attack(player2.board, coord);

    expect(player2.board.receiveAttack).toHaveBeenCalledWith(coord);
});

test('attack stores coord in prevMoves', () => {
    const player1 = new Player();
    const player2 = new Player();

    player2.board.receiveAttack = jest.fn();

    const coord = [3, 4];

    player1.attack(player2.board, coord);

    expect(player1.prevMoves).toContainEqual(coord);
});

test('prevent duplicate moves', () => {
    const player1 = new Player();
    const player2 = new Player();

    player2.board.receiveAttack = jest.fn();

    player1.prevMoves = [[3, 4]];

    const coord = [3, 4];

    expect(player1.attack(player2.board, coord)).toBe(false)

})

test('computer generates a random valid coord', () => {
    const playerComp = new Player(true);
    const player2 = new Player();

    player2.board.receiveAttack = jest.fn();
    playerComp.attack(player2.board);


    expect(player2.board.receiveAttack).toHaveBeenCalled();
})