import {
  ActionIcon,
  CloseButton,
  Group,
  Stack,
  TextInput,
  Title,
} from '@mantine/core'
import { PlusIcon } from '@radix-ui/react-icons'
import { useHover, useInputState } from '@mantine/hooks'

interface TodoInputProps {
  append: (...items: string[]) => void
}
export const TodoInput = ({ append }: TodoInputProps) => {
  const [input, setInput] = useInputState('')

  return (
    <Group>
      <TextInput value={input} onChange={setInput} />
      <ActionIcon
        onClick={() => {
          append(input)
          setInput('')
        }}
      >
        <PlusIcon />
      </ActionIcon>
    </Group>
  )
}
interface TodoItemProps {
  remove: () => void
  children: string
}
const TodoItem = ({ remove, children }: TodoItemProps) => {
  const { hovered, ref } = useHover()

  return (
    <Group position="apart" ref={ref}>
      <Title order={2}>{children}</Title>
      {hovered && <CloseButton onClick={remove} title="remove todo" />}
    </Group>
  )
}
interface TodoListProps {
  todos: string[]
  remove: (...indices: number[]) => void
}
export const TodoList = ({ todos, remove }: TodoListProps) => {
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
