import { atomWithStorage } from 'jotai/utils'

type timeMode = '24h' | '12h'
export const timeModeAtom = atomWithStorage<timeMode>('timeMode', '24h')
