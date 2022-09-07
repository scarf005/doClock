import { Center, Group, SimpleGrid, Stack } from '@mantine/core'
import { timeModeAtom } from 'atom'
import {
  Clock,
  Rotate,
  TodoInput,
  TodoItem,
  ToggleRotationMode,
  ToggleTimeMode,
} from 'components'
import { Todo } from 'data'
import dayjs from 'dayjs'
import { useLocalStorageList } from 'hooks'
import { useAtomValue } from 'jotai'
import {
  dateToDegree,
  degreesToRadian,
  filterIf,
  isSameMeridian,
} from 'utility'
import './index.css'

export const App = () => {
  const mode = useAtomValue(timeModeAtom)
  const [todos, { append, remove }] = useLocalStorageList<Todo>({
    key: 'todos',
    defaultValue: [
      new Todo('새벽', new Date('2022-09-06 00:00:00')),
      new Todo('3시', new Date('2022-09-06 03:00:00')),
      new Todo('저녁 약속', new Date('2022-09-06 6:00:00')),
      new Todo('10시', new Date('2022-09-06 10:00:00')),
      new Todo('10시 30분', new Date('2022-09-06 10:30:00')),
      new Todo('장보러 가기', new Date('2022-09-06 12:00:00')),
      new Todo('do something', new Date('2022-09-06 18:00:00')),
    ],
    deserialize: value => Todo.fromJSONList(value),
  })

  return (
    <>
      <Group>
        <ToggleTimeMode />
        <ToggleRotationMode />
      </Group>
      <SimpleGrid cols={2} spacing="xl">
        <Center style={{ height: '80vh' }}>
          <Clock />
          {filterIf(mode === '12h', todos, todo =>
            isSameMeridian(todo.date)
          ).map((todo, i) => (
            <Rotate
              key={todo.id}
              radian={degreesToRadian(dateToDegree(todo.date))}
            >
              <TodoItem remove={() => remove(i)} todo={todo} />
            </Rotate>
          ))}
        </Center>
        <Center style={{ height: '80vh' }}>
          <Stack>
            <Stack style={{ height: '40vh', overflow: 'scroll' }}>
              {todos
                .sort((a, b) => dayjs(a.date).diff(dayjs(b.date)))
                .map((todo, i) => (
                  <TodoItem
                    key={todo.id}
                    remove={() => remove(i)}
                    todo={todo}
                  />
                ))}
            </Stack>
            <TodoInput append={append} />
          </Stack>
        </Center>
      </SimpleGrid>
    </>
  )
}
