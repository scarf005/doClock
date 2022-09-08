import 'react-use'

declare module 'react-use' {
  export type UseMeasureRef<E extends Element = Element> = (
    element: E | null
  ) => void
}
