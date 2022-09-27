import ArrayBufferConverter from '../decision';

test('Function-OK1', () => {
  const eks1 = new ArrayBufferConverter();
  const funcTotal = eks1.load();
  expect(`${funcTotal}`).toEqual(`${[
    123, 34, 100, 97, 116, 97, 34, 58, 123, 34,
    117, 115, 101, 114, 34, 58, 123, 34, 105, 100,
    34, 58, 49, 44, 34, 110, 97, 109, 101, 34,
    58, 34, 72, 105, 116, 109, 97, 110, 34, 44,
    34, 108, 101, 118, 101, 108, 34, 58, 49, 48,
    125, 125, 125]}`);
});

test('Function-OK2', () => {
  const eks1 = new ArrayBufferConverter();
  const funcTotal = eks1.toString();
  expect(funcTotal).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
