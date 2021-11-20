import { calculateTimer } from '../timer';

test('should return time array', () => {
  expect(calculateTimer(50000)).toStrictEqual([13, 53, 20]);
});
