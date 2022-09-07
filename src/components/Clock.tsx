import { Title } from '@mantine/core'
import { IconMinus } from '@tabler/icons'
import { Rotate } from 'components'
import dayjs from 'dayjs'
import { useClock } from 'hooks'
import { ReactElement } from 'react'
import { degreesToRadian, HOUR_DEGREE, MINUTE_LINE_DEGREE } from 'utility'

interface MarkerProps {
  length: number
  degree: number
  icon: ReactElement
}
const Markers = ({ length, degree, icon }: MarkerProps) => (
  <>
    {Array.from({ length }, (_, i) => i * degree).map(i => (
      <Rotate key={i} radian={degreesToRadian(i)} option={{ offset: '27vh' }}>
        {icon}
      </Rotate>
    ))}
  </>
)
export const Clock = ({ is24Clock = false }: { is24Clock?: boolean }) => (
  <>
    <Title order={1} size="8vh">
      {dayjs(useClock()).format(is24Clock ? 'HH:mm:ss' : 'hh:mm:ssa') + ' >'}
    </Title>
    <Markers length={12} degree={HOUR_DEGREE} icon={<IconMinus size={10} />} />
    <Markers
      length={60}
      degree={MINUTE_LINE_DEGREE}
      icon={<IconMinus size={5} />}
    />
  </>
)
