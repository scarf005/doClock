import { Center, SimpleGrid, Stack } from '@mantine/core'
import { useListState } from '@mantine/hooks'
import {
  OFFSET,
  Clock,
  Rotate,
  TodoInput,
  TodoItem,
  TodoList,
} from 'components'
import { Todo } from 'data'
import { dateToDegree, degreesToRadian } from 'utility'
import './index.css'

export const App = () => {
  const [todos, { append, remove }] = useListState<Todo>([
    new Todo('새벽', new Date('2022-09-06 00:00:00')),
    new Todo('3시', new Date('2022-09-06 03:00:00')),
    new Todo('저녁 약속', new Date('2022-09-06 6:00:00')),
    new Todo('10시', new Date('2022-09-06 10:00:00')),
    new Todo('10시 30분', new Date('2022-09-06 10:30:00')),
    // new Todo('장보러 가기', new Date('2022-09-06 12:00:00')),
    // new Todo('do something', new Date('2022-09-06 18:00:00')),
  ])

  return (
    <SimpleGrid cols={2} spacing="xl">
      <Center style={{ height: '80vh' }}>
        <Clock />
        {todos.map((todo, i) => (
          <Rotate
            key={`${todo.date}`}
            radian={degreesToRadian(dateToDegree(todo.date))}
          >
            <TodoItem remove={() => remove(i)}>{todo.title}</TodoItem>
          </Rotate>
        ))}
      </Center>
      <Center style={{ height: '80vh' }}>
        <Stack>
          <TodoList todos={todos} remove={remove} />
          <TodoInput append={append} />
        </Stack>
      </Center>
    </SimpleGrid>
  )
}
