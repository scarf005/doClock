import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const otherValue = <T>(values: [T, T], value: T) =>
  values[1 - values.indexOf(value)]

export const atomWithToggle = <T>(values: [T, T] = [false, true] as [T, T]) => {
  const anAtom = atom(values[0], (get, set) => {
    set(anAtom, otherValue(values, get(anAtom)))
  })

  return anAtom
}

export const atomWithToggleStorage = <T>(
  key: string,
  values: [T, T] = [false, true] as [T, T],
  storage?: any
) => {
  const baseAtom = atomWithStorage(key, values[0], storage)
  const derivedAtom = atom(
    get => get(baseAtom),
    (get, set) => set(baseAtom, otherValue(values, get(baseAtom)))
  )

  return derivedAtom
}
