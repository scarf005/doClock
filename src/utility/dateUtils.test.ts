import { expect, test } from 'vitest'
import { dateToDegree, dateToTime24h } from './dateUtils'

test('dateToTime24h', () => {
  const d = new Date('2021-01-01T12:34:56.789')
  expect(dateToTime24h(d)).toEqual([12, 34, 56])
})

test('dateToDegree', () => {
  // 12hour
  expect(dateToDegree(new Date('2021-01-01T00:00:00.000'))).toBe(
    dateToDegree(new Date('2021-01-01T12:00:00.000'))
  )
  expect(dateToDegree(new Date('2021-01-01T00:00:00.000'))).toBe(
    dateToDegree(new Date('2021-01-02T00:00:00.000'))
  )
})
