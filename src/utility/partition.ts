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
