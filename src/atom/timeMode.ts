import { atomWithToggle } from './atomWithToggle'

export type TimeMode = '24h' | '12h'
export const timeModeAtom = atomWithToggle<TimeMode>(['12h', '24h'])
