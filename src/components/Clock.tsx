import { Title } from '@mantine/core'
import { IconMinus } from '@tabler/icons'
import { Rotate } from 'components'
import dayjs from 'dayjs'
import { useClock } from 'hooks'
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
      <Rotate key={i} radian={degreesToRadian(i)} option={{ offset: '27vh' }}>
        {icon}
      </Rotate>
    ))}
  </>
)
const [hours, minutes] = partition(
  Array.from({ length: 60 }, (_, i) => i * MINUTE_LINE_DEGREE),
  x => x % HOUR_DEGREE === 0
)
export const Clock = ({ is24Clock = false }: { is24Clock?: boolean }) => {
  const time = dayjs(useClock()).format(is24Clock ? 'HH:mm:ss' : 'hh:mm:ssa')

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
