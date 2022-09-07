import { Switch } from '@mantine/core'
import { timeModeAtom } from 'atom'
import { useAtom } from 'jotai'

export const ToggleTimeMode = () => {
  const [mode, toggle] = useAtom(timeModeAtom)

  return <Switch color="gray" label={`${mode}`} onChange={toggle} />
}
