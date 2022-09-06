// prettier-ignore
type Hours = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23
// prettier-ignore
type Minutes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59
type Seconds = Minutes

export const dateToTime24h = (d: Date) =>
  [
    d.getHours() as Hours,
    d.getMinutes() as Minutes,
    d.getSeconds() as Seconds,
  ] as const

export const dateToTime24hUTC = (d: Date) =>
  [
    d.getUTCHours() as Hours,
    d.getUTCMinutes() as Minutes,
    d.getUTCSeconds() as Seconds,
  ] as const

/**
 * converts 24-hour time to 12-hour time, with am/pm
 */
export const dateToTime12h = (d: Date) => {
  const [h24, m, s] = dateToTime24h(d)
  const [h12, ampm] = [h24 % 12 || 12, h24 < 12 ? 'am' : 'pm'] as const
  return [h12 as Hours, m, s, ampm] as const
}

export const degreesToRadian = (degrees: number) => (degrees * Math.PI) / 180

const HOUR_DEGREE = 30 as const
const MINUTE_DEGREE = 0.5 as const
const SECOND_DEGREE = MINUTE_DEGREE / 60

export const dateToDegree = (d: Date, is24Clock = false) => {
  const [h, m, s] = dateToTime24h(d)
  const degrees = h * HOUR_DEGREE + m * MINUTE_DEGREE + s * SECOND_DEGREE
  return is24Clock ? degrees / 2 : degrees
}

export const isAM = (d: Date) => d.getHours() < 12
export const isPM = (d: Date) => d.getHours() >= 12
