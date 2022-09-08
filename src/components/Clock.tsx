import { Title } from '@mantine/core'
import { IconArrowNarrowRight, IconArrowRight, IconMinus } from '@tabler/icons'
import { isAbsoluteRotation, timeModeAtom } from 'atom'
import { Rotate } from 'components'
import dayjs from 'dayjs'
import { useClock } from 'hooks'
import { useAtomValue } from 'jotai'
import { ReactElement } from 'react'
import {
  degreesToRadian,
  hourHandToRadian,
  HOUR_DEGREE,
  minuteHandToRadian,
  MINUTE_HAND_DEGREE,
  partition,
  secondHandToRadian,
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
interface HandProps {
  radian: number
  icon: ReactElement
}
const Hand = ({ radian, icon }: HandProps) => {
  return (
    <Rotate radian={radian} offset="26vh">
      {icon}
    </Rotate>
  )
}

const getMarkers = (div: 1 | 2 = 1) =>
  partition(
    Array.from({ length: 60 * div }, (_, i) => (i * MINUTE_HAND_DEGREE) / div),
    x => x % (HOUR_DEGREE / div) === 0
  )

export const Clock = () => {
  const isAbsolute = useAtomValue(isAbsoluteRotation)
  const mode = useAtomValue(timeModeAtom)
  const [hour, minute] = getMarkers((['12h', '24h'].indexOf(mode) + 1) as 1 | 2)
  const time = dayjs(useClock()).format(
    mode === '12h' ? 'hh:mm:ssa' : 'HH:mm:ss'
  )

  return (
    <>
      <Title order={1} size="8vh">
        {time}
      </Title>
      <Markers ns={hour} icon={<IconMinus size={8} />} />
      <Markers ns={minute} icon={<IconMinus size={5} />} />
      {isAbsolute ? (
        <>
          <Hand
            radian={secondHandToRadian()}
            icon={<IconMinus size={20} color="#eb4034" />}
          />
          <Hand
            radian={minuteHandToRadian()}
            icon={<IconMinus size={20} color="#f0a36c" />}
          />
          <Hand
            radian={hourHandToRadian()}
            icon={<IconArrowNarrowRight size={20} color="#f2de94" />}
          />
        </>
      ) : (
        <IconMinus
          size={20}
          color="#eb4034"
          style={{ transform: 'translateX(5vh)' }}
        />
      )}
    </>
  )
}
