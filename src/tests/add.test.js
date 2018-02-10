const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('should add two numbers', () => {
  const res = add(3,4);
  expect(res).toBe(7);
});

test('should return Hello with given name', () => {
  const res = generateGreeting('Joko');
  expect(res).toBe('Hello Joko');
});

test('should return Hello with no name', () => {
  const res = generateGreeting();
  expect(res).toBe('Hello Anonymous');
});