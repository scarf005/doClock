import { assert } from 'console'
import { useClock } from 'hooks'
import { dateToDegree, degreesToRadian } from 'utility'

export const QUARTER_CIRCLE = 1.57079633
export const OFFSET = '34vh'

interface RotateOption {
  offset?: number | string
  relative?: boolean
}
interface RotateProps {
  radian: number
  option?: RotateOption
  children: React.ReactNode
}
const defaultOption = { offset: OFFSET, relative: true }
export const Rotate = ({ radian, option = {}, children }: RotateProps) => {
  const opt = { ...defaultOption, ...option }
  const rel_rad = degreesToRadian(dateToDegree(useClock()))
  const rad = opt.relative ? radian - rel_rad : radian

  return (
    <div
      key={radian}
      style={{
        position: 'absolute',
        transform: `rotateZ(${rad}rad) translateX(${opt.offset})`,
        transformOrigin: 'center',
      }}
    >
      {children}
    </div>
  )
}
