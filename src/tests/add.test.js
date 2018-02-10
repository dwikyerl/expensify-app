const add = (a, b) => a + b;

test('should add two numbers', () => {
  const res = add(3,4);
  expect(res).toBe(7);
});