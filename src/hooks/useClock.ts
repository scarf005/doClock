import { useEffect, useState } from 'react'

/**
 * Get current time, update based on time interval
 * @param interval miliseconds to update the clock. default 1000 (1s)
 * @returns current time
 */
export const useClock = (interval: number = 1000) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const fn = setInterval(() => setTime(new Date()), interval)
    return () => clearInterval(fn)
  }, [])

  return time
}
