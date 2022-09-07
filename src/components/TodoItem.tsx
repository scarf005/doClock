import { CloseButton, Group, Title } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import { Todo} from 'data'

interface TodoItemProps {
  remove: () => void
  todo: Todo
}
export const TodoItem = ({ remove, todo }: TodoItemProps) => {
  const { hovered, ref } = useHover()

  return (
    <Group position="apart" ref={ref}>
      <Title order={2}>{todo.title}</Title>
      <div style={{width: '0vw'}}>
        {hovered && <CloseButton onClick={remove} title="remove todo" />}
      </div>
    </Group>
  )
}
