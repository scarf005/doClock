import {
  ActionIcon,
  Button,
  CloseButton,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  TextInput,
  Title,
} from '@mantine/core'
import { useClock } from './hooks/useClock'
import { useRef, useState } from 'react'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import { useInputState, useListState } from '@mantine/hooks'
import './App.css'

const Clock = () => <Title order={1}>{`${useClock()}`}</Title>

interface TodoItemProps {
  remove: () => void
  children: string
}
const TodoItem = ({ remove, children }: TodoItemProps) => {
  return (
    <Group position="apart">
      <Title order={2}>{children}</Title>
      <CloseButton onClick={remove} title="remove todo" />
    </Group>
  )
}

interface TodoInputProps {
  append: (...items: string[]) => void
}
const TodoInput = ({ append }: TodoInputProps) => {
  const [str, setStr] = useInputState('')

  return (
    <Group>
      <TextInput value={str} onChange={setStr} />
      <ActionIcon
        onClick={() => {
          append(str)
          setStr('')
        }}
      >
        <PlusIcon />
      </ActionIcon>
    </Group>
  )
}

interface TodoListProps {
  todos: string[]
  remove: (...indices: number[]) => void
}
const TodoList = ({ todos, remove }: TodoListProps) => {
  return (
    <Stack>
      {todos.map((todo, i) => (
        <TodoItem key={i} remove={() => remove(i)}>
          {todo}
        </TodoItem>
      ))}
    </Stack>
  )
}

export const App = () => {
  const [todos, { append, remove }] = useListState<string>([
    'do something',
    'bar',
  ])

  return (
    <div className="App">
      <SimpleGrid cols={2} spacing="xl">
        <Clock />
        <Stack>
          <TodoList todos={todos} remove={remove} />
          <TodoInput append={append} />
        </Stack>
      </SimpleGrid>
    </div>
  )
}
