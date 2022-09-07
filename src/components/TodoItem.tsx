import { CloseButton, Group, HoverCard, Text, Title } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import { Todo } from 'data'
import dayjs from 'dayjs'

interface TodoItemProps {
  remove: () => void
  todo: Todo
}
export const TodoItem = ({ remove, todo }: TodoItemProps) => {
  const { hovered, ref } = useHover()

  return (
    <Group position="apart" ref={ref}>
      <Title order={2} color={todo.getColor()}>
        {todo.title}
      </Title>
      {hovered && (
        <>
          <Text>{dayjs(todo.date).format('HH:mm:ss')}</Text>
          <CloseButton onClick={remove} title="remove todo" />
        </>
      )}
    </Group>
  )
}
