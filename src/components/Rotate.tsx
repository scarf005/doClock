import { dateToRadian } from 'utility'

export const QUARTER_CIRCLE = 1.57079633
export const offset = '30vh'

export const Rotate = ({
  date,
  children,
}: {
  date: Date
  children: React.ReactNode
}) => {
  return (
    <div
      key={`${date}`}
      style={{
        position: 'absolute',
        transform: `rotateZ(${
          dateToRadian(date) + QUARTER_CIRCLE
        }rad) translateX(${offset})`,
        transformOrigin: 'center',
      }}
    >
      {children}
    </div>
  )
}
