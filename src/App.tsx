import { Center, SimpleGrid, Stack, Title } from '@mantine/core'
import { useListState } from '@mantine/hooks'
import { Rotate, TodoInput, TodoItem, TodoList } from 'components'
import { Todo } from 'data'
import dayjs from 'dayjs'
import { useClock } from 'hooks'
import './index.css'

const Clock = ({ is24Clock = false }: { is24Clock?: boolean }) => (
  <Title order={1} size="8vh">
    {dayjs(useClock()).format(is24Clock ? 'HH:mm:ss' : 'hh:mm:ss a')}
  </Title>
)

export const App = () => {
  const [todos, { append, remove }] = useListState<Todo>([
    new Todo('새벽', new Date('2022-09-06 00:00:00')),
    new Todo('저녁 약속', new Date('2022-09-06 6:00:00')),
    new Todo('장보러 가기', new Date('2022-09-06 12:00:00')),
    new Todo('do something', new Date('2022-09-06 18:00:00')),
  ])

  return (
    <SimpleGrid cols={2} spacing="xl">
      <Center style={{ height: '80vh' }}>
        <Clock />
        {todos.map((todo, i) => (
          <Rotate date={todo.date} is24Clock={true}>
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
