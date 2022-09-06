import { dateToDegree, degreesToRadian } from 'utility'

export const QUARTER_CIRCLE = 1.57079633
export const OFFSET = '34vh'

interface RotateProps {
  radian: number
  offset?: number | string
  children: React.ReactNode
}
export const Rotate = ({ radian, offset = 0, children }: RotateProps) => {
  return (
    <div
      key={radian}
      style={{
        position: 'absolute',
        transform: `rotateZ(${radian}rad) translateX(${offset})`,
        transformOrigin: 'center',
      }}
    >
      {children}
    </div>
  )
}
