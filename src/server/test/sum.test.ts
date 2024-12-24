import { sum } from '../../server/sum'

test('add', () => {
  expect(sum(1, 2)).toBe(3)
})
