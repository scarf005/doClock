import { Title } from '@mantine/core'
import { IconMinus } from '@tabler/icons'
import { timeModeAtom } from 'atom'
import { Rotate } from 'components'
import dayjs from 'dayjs'
import { useClock } from 'hooks'
import { useAtomValue } from 'jotai'
import { ReactElement } from 'react'
import {
  degreesToRadian,
  HOUR_DEGREE,
  MINUTE_LINE_DEGREE,
  partition,
} from 'utility'

interface MarkerProps {
  ns: number[]
  icon: ReactElement
}
const Markers = ({ ns, icon }: MarkerProps) => (
  <>
    {ns.map(i => (
      <Rotate key={i} radian={degreesToRadian(i)} offset="27vh">
        {icon}
      </Rotate>
    ))}
  </>
)
const [hours12, minutes12] = partition(
  Array.from({ length: 60 }, (_, i) => i * MINUTE_LINE_DEGREE),
  x => x % HOUR_DEGREE === 0
)
const [hours24, minutes24] = partition(
  Array.from({ length: 120 }, (_, i) => (i * MINUTE_LINE_DEGREE) / 2),
  x => x % (HOUR_DEGREE / 2) === 0
)
export const Clock = () => {
  const mode = useAtomValue(timeModeAtom)
  const time = dayjs(useClock()).format(
    mode === '12h' ? 'hh:mm:ssa' : 'HH:mm:ss'
  )
  const [hours, minutes] =
    mode === '12h' ? [hours12, minutes12] : [hours24, minutes24]

  return (
    <>
      <Title order={1} size="8vh">
        {time + ' >'}
      </Title>
      <Markers ns={hours} icon={<IconMinus size={8} />} />
      <Markers ns={minutes} icon={<IconMinus size={5} />} />
    </>
  )
}
