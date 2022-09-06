import { describe, expect, test } from 'vitest'
import { npad } from './npad'

test('npad', () => {
  expect(npad(1)).toBe('01')
  expect(npad(1, 3)).toBe('001')
  expect(npad(12, 2)).toBe('12')
  expect(npad(12, 3)).toBe('012')
})
