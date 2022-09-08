import { useListState, useLocalStorage } from '@mantine/hooks'
import { useEffect } from 'react'
import { useEffectOnce, useFirstMountState } from 'react-use'

type Return<T> = ReturnType<typeof useListState<T>>

const loadLocalStorage = <T>({
  key,
  defaultValue,
  deserialize,
}: Required<Omit<useLocalStorageList<T>, 'serialize'>>) => {
  const raw = localStorage.getItem(key)

  return raw ? deserialize(raw) : defaultValue
}

interface useLocalStorageList<T> {
  key: string
  defaultValue: T[]
  serialize?: (value: T[]) => string
  deserialize?: (value: string) => T[]
}
export const useLocalStorageList = <T = string>({
  key,
  defaultValue = [],
  serialize = JSON.stringify,
  deserialize = JSON.parse,
}: useLocalStorageList<T>): Return<T> => {
  const isFirstMount = useFirstMountState()
  const [list, handlers] = useListState<T>(
    loadLocalStorage({ key, defaultValue, deserialize })
  )

  useEffect(() => {
    if (!isFirstMount) localStorage.setItem(key, serialize(list))
  }, [serialize(list)])

  return [list, handlers]
}
