const chosen = require('./chosen');

test('Find the chosen one', () => {
  const arr = [1, 2, 3, 4, 5];
  expect(chosen(arr)).toBe(3);
});