import {
  Center,
  keyframes,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { useListState } from '@mantine/hooks'
import { TodoList, TodoInput } from 'components'
import { useClock } from 'hooks'
import { dateToDayString, npad } from 'utility'
import './index.css'

const Clock = () => {
  return (
    <Title order={1} size="10vh">
      {dateToDayString(useClock())}
    </Title>
  )
}

export const App = () => {
  const [todos, { append, remove }] = useListState<string>([
    'do something',
    '한글',
  ])

  return (
    <SimpleGrid cols={2} spacing="xl">
      <Center style={{ height: '80vh' }}>
        <Clock />
        <Text
          style={{
            position: 'absolute',
            transform: 'rotate(0.5rad) translateX(200px)',
          }}
        >
          Do Something
        </Text>
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
