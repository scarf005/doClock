import { dateToDegree, degreesToRadian } from 'utility'

export const QUARTER_CIRCLE = 1.57079633
export const OFFSET = '34vh'

interface RotateOption {
  offset?: number | string
  relative?: boolean
}
const defaultOption = { offset: OFFSET, relative: true }
interface RotateProps {
  radian: number
  option?: RotateOption
  children: React.ReactNode
}
export const Rotate = ({ radian, option = {}, children }: RotateProps) => {
  const opt = { ...defaultOption, ...option }
  const rad = opt.relative ? radian - dateToDegree(new Date()) : radian

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
