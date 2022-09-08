export const partition = <T>(
  xs: T[],
  predicate: (x: T) => boolean
): [T[], T[]] =>
  xs.reduce(
    (res, elem) => {
      res[predicate(elem) ? 0 : 1].push(elem)
      return res
    },
    [[], []] as [T[], T[]]
  )

export const mapIf = <T>(condIf: boolean, xs: T[], mapFn: (x: T) => T): T[] =>
  condIf ? xs.map(mapFn) : xs

export const filterIf = <T>(
  condIf: boolean,
  xs: T[],
  filterFn: (x: T) => boolean,
): T[] => (condIf ? xs.filter(filterFn) : xs)
