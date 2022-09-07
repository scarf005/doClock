import { atomWithToggle, atomWithToggleStorage } from './atomWithToggle'

export type TimeMode = '24h' | '12h'
export const timeModeAtom = atomWithToggleStorage<TimeMode>('timemode', [
  '12h',
  '24h',
])
