import { expect, test } from 'vitest'
import { dateToTime24h } from './dateUtils'

test('dateToTime24h', () => {
  const d = new Date('2021-01-01T12:34:56.789')
  expect(dateToTime24h(d)).toEqual([12, 34, 56])
})

