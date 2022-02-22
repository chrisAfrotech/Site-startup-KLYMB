const somme = require('./somme')

test('additione corectement 2 nombres', () => {
    expect(somme(1, 2)).toBe(3)
})