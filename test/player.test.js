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
