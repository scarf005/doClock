import { dateToRadian } from 'utility'

export const QUARTER_CIRCLE = 1.57079633
export const offset = '34vh'

interface RotateProps {
  date: Date
  children: React.ReactNode
  is24Clock?: boolean
}
export const Rotate = ({ date, children, is24Clock = false }: RotateProps) => {
  return (
    <div
      key={`${date}`}
      style={{
        position: 'absolute',
        transform: `rotateZ(${
          dateToRadian(date, is24Clock) - QUARTER_CIRCLE
        }rad) translateX(${offset})`,
        transformOrigin: 'center',
      }}
    >
      {children}
    </div>
  )
}
