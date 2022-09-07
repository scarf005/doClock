import { atom } from 'jotai'

export const atomWithToggle = <T>(value: [T, T] = [false, true] as [T, T]) => {
  const anAtom = atom(value[0], (get, set) => {
    set(anAtom, value[1 - value.indexOf(get(anAtom))])
  })

  return anAtom
}
