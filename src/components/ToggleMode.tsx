import { Switch } from '@mantine/core'
import { rotationModeAtom, timeModeAtom } from 'atom'
import { useAtom } from 'jotai'

export const ToggleTimeMode = () => {
  const [mode, toggle] = useAtom(timeModeAtom)

  return (
    <Switch
      color="gray"
      label={mode}
      checked={mode === '24h'}
      onChange={toggle}
    />
  )
}


export const ToggleRotationMode = () => {
  const [mode, toggle] = useAtom(rotationModeAtom)

  return (
    <Switch
      color="gray"
      label={mode}
      checked={mode === 'absolute'}
      onChange={toggle}
    />
  )
}
