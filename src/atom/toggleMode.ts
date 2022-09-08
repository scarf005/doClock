import { atom } from 'jotai'
import { atomWithToggle, atomWithToggleStorage } from './atomWithToggle'

type TimeMode = '24h' | '12h'
export const timeModeAtom = atomWithToggleStorage<TimeMode>('timeMode', [
  '12h',
  '24h',
])

type RotationMode = 'relative' | 'absolute'
export const rotationModeAtom = atomWithToggleStorage<RotationMode>(
  'rotationMode',
  ['relative', 'absolute']
)
export const isAbsoluteRotation = atom(
  get => get(rotationModeAtom) === 'absolute'
)
