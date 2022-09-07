import { isAbsoluteRotation } from 'atom'
import { useClock } from 'hooks'
import { useAtomValue } from 'jotai'
import { dateToDegree, degreesToRadian } from 'utility'

export const QUARTER_CIRCLE = 1.57079633
export const OFFSET = '34vh'

interface RotateProps {
  radian: number
  offset?: number | string
  children: React.ReactNode
}
export const Rotate = ({ radian, offset = OFFSET, children }: RotateProps) => {
  const isAbsolute = useAtomValue(isAbsoluteRotation)
  const relativeRadian = radian - degreesToRadian(dateToDegree(useClock()))
  const rad = isAbsolute ? radian : relativeRadian

  return (
    <div
      key={radian}
      style={{
        position: 'absolute',
        transform: `rotateZ(${rad}rad) translateX(${offset})`,
        transformOrigin: 'center',
      }}
    >
      {children}
    </div>
  )
}
