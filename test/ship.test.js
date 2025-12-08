const Ship = require('../src/ship');

test('ship has correct length', () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
});

test('hit() increments hits', () => {
    const ship = new Ship(4);
    ship.hit();
    expect(ship.hits).toBe(1);
});

test('isSunk returns false if not all hits taken', () => {
    const ship = new Ship(2);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
});

test('isSunk returns true when ship is sunk', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});
