import { Center, SimpleGrid, Stack, Title } from '@mantine/core'
import { useListState } from '@mantine/hooks'
import { TodoList, TodoInput } from 'components'
import { useClock } from 'hooks'
import { npad } from 'utility'
import './App.css'

const Clock = () => {
  const d = useClock()
  const time = `${d.getHours()}:${npad(d.getHours())}:${npad(d.getSeconds())}`

  return (
    <Title order={1} size="10vh">
      {time}
    </Title>
  )
}

export const App = () => {
  const [todos, { append, remove }] = useListState<string>([
    'do something',
    'bar',
  ])

  return (
    <SimpleGrid cols={2} spacing="xl">
      <Center style={{ height: '80vh' }}>
        <Clock />
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
